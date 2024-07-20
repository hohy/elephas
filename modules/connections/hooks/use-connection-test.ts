import { useMutation } from '@tanstack/react-query'
import { testConnectionAsync } from '../../expo-postgres-client-kit'
import { useConnectionString } from './use-connection-string'

export default function useConnectionTest() {
  return useMutation({
    mutationFn: async (connectionString: string): Promise<string> => {
      const connection = useConnectionString(connectionString)
      if (connection) {
        const result = await testConnectionAsync(connection)

        if (result.error) {
          throw new Error(result.error)
        }

        if (result.success) {
          return connectionString
        }
      }
      throw new Error('Invalid connection string')
    },
  })
}
