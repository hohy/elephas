import { ChevronRight } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, H1, Input, ListItem, Separator, Sheet, SizableText, Text, View, XStack, YGroup, YStack } from "tamagui";
import { create } from 'zustand'
import Intersperse from "../../ui/intersperse";
import { useState } from "react";
import { Modal } from "react-native";

export interface Connection {
  id: number, 
  label: string, 
  environment?: string,
  connectionString?: string
}

interface ConnectionState {
  connections: Connection[]
  addConnection: (connection: {label: string, connectionString: string}) => void
}

export const useConnectionsStore = create<ConnectionState>((set) => ({
  connections: [
    { id: 1, label: "Zoe", environment: "PRODUCTION" },
    { id: 2, label: "Zoe", environment: "STAGING" },
    { id: 3, label: "Surge" },
    { id: 4, label: "Surge", environment: "DEVELOPMENT" },
    { id: 5, label: "Local" },
    { id: 6, label: "Some long connection name", environment: "DEVELOPMENT" }
  ],
  addConnection: (connection) => set(state => {
    console.log({ connection }, 'Adding a new connection to store')
    const id = state.connections.length + 1
    const newConnection = {...connection, id }
    return { connections: [...state.connections, newConnection] }
  })}
))

function ConnectionsListItem({id, label, environment}: Connection) {
  return <YGroup.Item>
  <ListItem iconAfter={ChevronRight}>
     <XStack flex={1} justifyContent="space-between" alignItems="center" width={"100%"}>
        <SizableText size={"$6"}>{label}</SizableText>
        <SizableText color={"$gray10Dark"} size={"$2"} flexGrow={1} maxWidth={"50%"} numberOfLines={1} paddingLeft={"$3"}>database.zoe-development.aws.very.long.url.com</SizableText>
        { environment && <XStack borderRadius={"$3"} overflow="hidden"><Text backgroundColor={"green"} padding={"$1.5"} overflow={"hidden"}>{environment}</Text></XStack>}
      </XStack>
      
    
  </ListItem>
</YGroup.Item>
}

export default function ConnectionsList() {
  const connections = useConnectionsStore(state => state.connections)
  const [modalVisible, setModalVisible] = useState(false);

  return <YStack display="flex" justifyContent="space-between" height={"100%"} width="100%" maxWidth={600} padding={"$3"}>
      <YGroup separator={<Separator/>}>
        {connections.map(connection => <ConnectionsListItem key={connection.id} {...connection} />)}
      </YGroup>
      <Link href="/(connections)/add-new-connection" asChild><Button marginBottom="$4">Add a new connection</Button></Link>
    </YStack>
}