import { ConnectionStringParser } from 'connection-string-parser'
import { ConnectionParams } from '../modules/expo-postgres-client-kit/src/ExpoPostgresClientKit.types'

const connectionStringParser = new ConnectionStringParser({
  scheme: 'postgres',
  hosts: [],
  username: '',
})

export function parseConnectionString(
  connectionString: string,
): ConnectionParams | null {
  try {
    const connection = connectionStringParser.parse(connectionString ?? '')
    return {
      host: connection.hosts[0].host,
      port: connection.hosts[0].port ?? 5432,
      database: connection.endpoint ?? 'postgres',
      username: connection.username,
      password: connection.password,
    }
  } catch (error) {}
  return null
}
