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
}

interface ConnectionsState {
  connections: Connection[]
  addConnection: (connection: {
    label: string
    connectionString: string
  }) => void
  deleteConnection: (id: string) => void
  updateConnection: (connection: Connection) => void
  loadConnectionStrings: () => void
}

export const useConnectionsStore = create(
  persist<ConnectionsState>(
    (set, get) => ({
      connections: [
        { id: '1', label: 'Zoe', environment: 'PRODUCTION' },
        { id: '2', label: 'Zoe', environment: 'STAGING' },
        { id: '3', label: 'Surge' },
        { id: '4', label: 'Surge', environment: 'DEVELOPMENT' },
        { id: '5', label: 'Local' },
        {
          id: '6',
          label: 'Some long connection name',
          environment: 'DEVELOPMENT',
        },
      ],
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
              connectionString: connectionString ?? void 0,
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
