import ExpoModulesCore
import PostgresClientKit

public class ExpoPostgresClientKitModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoPostgresClientKit")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }
      
    AsyncFunction("testConnection") { (connectionString: String) in
      var configuration = PostgresClientKit.ConnectionConfiguration()
        configuration.user
    }
  }
}
