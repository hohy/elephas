import {
  ConnectionParams,
  ConnectionTestResult,
} from './src/ExpoPostgresClientKit.types'
import ExpoPostgresClientKitModule from './src/ExpoPostgresClientKitModule'

export function hello(): string {
  return ExpoPostgresClientKitModule.hello()
}

export async function setValueAsync(value: string) {
  return await ExpoPostgresClientKitModule.setValueAsync(value)
}

export async function testConnectionAsync(
  connectionParams: ConnectionParams,
): Promise<ConnectionTestResult> {
  return await ExpoPostgresClientKitModule.testConnectionAsync(connectionParams)
}
