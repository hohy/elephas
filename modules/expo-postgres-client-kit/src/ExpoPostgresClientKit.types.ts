export type ChangeEventPayload = {
  value: string
}

export type ExpoPostgresClientKitViewProps = {
  name: string
}

export type ConnectionParams = {
  host: string
  port: number
  database: string
  username?: string
  password?: string
  ssl?: boolean
}

export type ConnectionTestResult = {
  success: boolean
  error?: string
}
