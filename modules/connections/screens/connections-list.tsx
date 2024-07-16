import { Separator, YGroup, YStack } from "tamagui"
import { useConnectionsStore } from "../hooks/conections-store"
import { Link, router } from "expo-router"
import ConnectionsListItem from "../components/connection-list-item"
import FloatingButton from "../../../ui/floating-button"
import { Plus } from "@tamagui/lucide-icons"

export default function ConnectionsList() {
  const connections = useConnectionsStore(state => state.connections)

  return <YStack display="flex" justifyContent="space-around" height={"100%"} width="100%" maxWidth={600} padding={"$3"}>
      <YGroup separator={<Separator/>}>
        {connections.map((connection, index) => <ConnectionsListItem key={connection.id} connection={connection} index={index} />)}
      </YGroup>
      <FloatingButton themeInverse onPress={() => router.push('/(connections)/add-new-connection')}><Plus/></FloatingButton>
    </YStack>
}