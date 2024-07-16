import { useState } from 'react'


export default function usePostgres() {
  const [connectionStatus, setStatus] = useState<'connected' | 'connecting' | 'disconnected' | 'error'>('disconnected')
  return {
    connectionStatus,
    connect: async (connectionString: string) => {
      setStatus('connecting')
      console.log({ connectionString }, 'Connecting to Postgres')

      try {
        setStatus('connected')
      } catch (e) {
        console.error({ e}, 'Failed to connect to Postgres')
        setStatus('error')
      }
    }
  }
}