import { ConnectionStringParser } from 'connection-string-parser'

const connectionStringParser = new ConnectionStringParser({
  scheme: 'postgres',
  hosts: [],
  username: '',
})

export function useConnectionString(connectionString: string) {
  try {
    const connection = connectionStringParser.parse(connectionString ?? '')
    return connection
  } catch (error) {
    // console.error(error)
  }
  return null
}
