import ExpoPostgresClientKitModule from './src/ExpoPostgresClientKitModule'

export function hello(): string {
  return ExpoPostgresClientKitModule.hello()
}

export async function setValueAsync(value: string) {
  return await ExpoPostgresClientKitModule.setValueAsync(value)
}

export async function testConnection(
  connectionString: string,
): Promise<string> {
  return await ExpoPostgresClientKitModule.testConnection(connectionString)
}
