import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Connection {
  id: number
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
  deleteConnection: (id: number) => void
  updateConnection: (connection: Connection) => void
}

export const useConnectionsStore = create(
  persist<ConnectionsState>((set) => ({
    connections: [
      { id: 1, label: 'Zoe', environment: 'PRODUCTION' },
      { id: 2, label: 'Zoe', environment: 'STAGING' },
      { id: 3, label: 'Surge' },
      { id: 4, label: 'Surge', environment: 'DEVELOPMENT' },
      { id: 5, label: 'Local' },
      { id: 6, label: 'Some long connection name', environment: 'DEVELOPMENT' },
    ],
    addConnection: (connection) =>
      set((state) => {
        console.log({ connection }, 'Adding a new connection to store')
        const id =
          state.connections.length > 0
            ? Math.max(...state.connections.map((connection) => connection.id)) + 1
            : 1
        const newConnection = { ...connection, id }
        return { connections: [...state.connections, newConnection] }
      }),
    deleteConnection: (id: number) =>
      set((state) => {
        return {
          connections: state.connections.filter(
            (connection) => connection.id !== id,
          ),
        }
      }),
    updateConnection: (connection) =>
      set((state) => {
        return {
          connections: state.connections.map((c) =>
            c.id === connection.id ? connection : c,
          ),
        }
      }),
  }), {
    name: 'connections-storage',
    storage: createJSONStorage(() => AsyncStorage),
    partialize: (state) => ({
      ...state,
      connections: state.connections.map(
        (connection) => { const { connectionString, ...rest } = connection; return rest })
    }
    ),
  }))