import { Link, Stack } from "expo-router"

export default function ConnectionsLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={
        {
          title: 'Connections',
          headerShown: true,
        }
      }
    />
    <Stack.Screen
      name="add-new-connection"
      options={
        {
          title: 'Add a new connection',
          headerShown: true,
          presentation: 'modal',
        }
      }
    />
  </Stack>
}