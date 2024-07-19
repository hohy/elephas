import { useMutation } from '@tanstack/react-query'
import { testConnectionAsync } from '../../expo-postgres-client-kit'
import { useConnectionString } from './use-connection-string'
import { Alert } from 'react-native'

export default function useConnectionTest() {
  return useMutation({
    mutationFn: async (connectionString: string) => {
      const connection = useConnectionString(connectionString)
      if (connection) {
        const result = await testConnectionAsync(connection)

        if (result.error) {
          throw new Error(result.error)
        }

        if (result.success) {
          Alert.alert('Connection test', 'Successfully connected ✅')
        }
      }
      throw new Error('Invalid connection string')
    },
  })
}
