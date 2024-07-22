import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { randomUUID } from 'expo-crypto'

export interface Connection {
  id: string
  label: string
  environment?: string
  connectionString?: string
  useSSL: boolean
}

interface ConnectionsState {
  connections: Connection[]
  addConnection: (connection: {
    label: string
    connectionString: string
    useSSL: boolean
  }) => void
  deleteConnection: (id: string) => void
  updateConnection: (connection: Connection) => void
  loadConnectionStrings: () => void
}

export const useConnectionsStore = create(
  persist<ConnectionsState>(
    (set, get) => ({
      connections: [],
      addConnection: async (connection) => {
        const id = randomUUID()
        await SecureStore.setItemAsync(
          `connection-${id}`,
          connection.connectionString,
        )
        set((state) => {
          const newConnection = { ...connection, id }
          return { connections: [...state.connections, newConnection] }
        })
      },
      deleteConnection: async (id: string) => {
        await SecureStore.deleteItemAsync(`connection-${id}`)
        set((state) => {
          return {
            connections: state.connections.filter(
              (connection) => connection.id !== id,
            ),
          }
        })
      },
      updateConnection: async (connection) => {
        await SecureStore.setItemAsync(
          `connection-${connection.id}`,
          connection.connectionString ?? '',
        )
        set((state) => {
          return {
            connections: state.connections.map((c) =>
              c.id === connection.id ? connection : c,
            ),
          }
        })
      },
      loadConnectionStrings: async () => {
        const connections = get().connections
        const updatedConnections = await Promise.all(
          connections.map(async (connection) => {
            const connectionString = await SecureStore.getItemAsync(
              `connection-${connection.id}`,
            )
            return {
              ...connection,
              connectionString: connectionString ?? undefined,
            }
          }),
        )
        set({ connections: updatedConnections })
      },
    }),
    {
      name: 'connections-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        ...state,
        connections: state.connections.map((connection) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { connectionString, ...rest } = connection
          return rest
        }),
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.loadConnectionStrings()
        }
      },
    },
  ),
)
