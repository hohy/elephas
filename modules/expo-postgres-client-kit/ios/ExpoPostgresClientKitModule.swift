import ExpoModulesCore
import PostgresClientKit

struct ConnectionParams: Record {
    @Field
    var host: String

    @Field
    var port: Int
    
    @Field
    var username: String?
    
    @Field
    var password: String?
    
    @Field
    var database: String
}

struct ConnectionTestResult: Record {
    @Field
    var success: Bool
    
    @Field
    var error: String?
}

public class ExpoPostgresClientKitModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoPostgresClientKit")

    AsyncFunction("testConnectionAsync") { (connectionParams: ConnectionParams, promise: Promise) in
        print("Testing connection to postgres://\(String(connectionParams.username ?? "")):\(String(connectionParams.password ?? ""))@\(String(connectionParams.host)):\(String(connectionParams.port))/\(String(connectionParams.database))")
        do {
            var configuration = PostgresClientKit.ConnectionConfiguration()
            
            configuration.host = connectionParams.host
            configuration.port = connectionParams.port
            configuration.database = connectionParams.database
            configuration.ssl = false
            if (connectionParams.username != nil) {
                configuration.user = connectionParams.username!
            }
            if (connectionParams.password != nil) {
                configuration.credential = .scramSHA256(password: connectionParams.password!)
            }
            
            let connection = try PostgresClientKit.Connection(configuration: configuration)
            defer { connection.close() }
            
            let query = "SELECT 1 + 1;"
            let statement = try connection.prepareStatement(text: query)
            
            let cursor = try statement.execute()
            defer { cursor.close() }
            
            let row = cursor.next()
            if (row != nil) {
                let columns = try row!.get().columns
                if (try columns[0].decimal() == 2) {
                    let result = ConnectionTestResult()
                    result.success = true
                    promise.resolve(result)
                    return
                }
            }
        } catch {
            print("Connection test failed: \(String(describing: error))")
            let result = ConnectionTestResult()
            result.success = false
            result.error = "Connection test failed: \(String(describing: error))"
            promise.resolve(result)
            return
        }
        let result = ConnectionTestResult()
        result.success = false
        result.error = "Connection test failed"
        return
    }
  }
}
