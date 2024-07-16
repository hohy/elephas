import { ChevronRight } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, H1, Input, ListItem, Separator, Sheet, SizableText, Text, View, XStack, YGroup, YStack } from "tamagui";
import { create } from 'zustand'
import Intersperse from "../../ui/intersperse";
import { useState } from "react";
import { Modal } from "react-native";
import FloatingButton from "../../ui/floating-button";
import { Plus } from '@tamagui/lucide-icons'
import useConnectionActionSheet from "./components/connection-actions-sheet";

export interface Connection {
  id: number, 
  label: string, 
  environment?: string,
  connectionString?: string
}

interface ConnectionState {
  connections: Connection[]
  addConnection: (connection: {label: string, connectionString: string}) => void
  deleteConnection: (id: number) => void 
  updateConnection: (connection: Connection) => void
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
    const id = state.connections.length > 0 ? Math.max(...state.connections.map(connection => connection.id)) + 1 : 1
    const newConnection = {...connection, id }
    return { connections: [...state.connections, newConnection] }
  }),
  deleteConnection: (id: number) => set(state => {
    return { connections: state.connections.filter(connection => connection.id !== id) }
  }),
  updateConnection: (connection) => set(state => {
    return { connections: state.connections.map(c => c.id === connection.id ? connection : c) }
  })
}
))

function ConnectionsListItem(props: {connection: Connection, index: number}) {
  const showConnectionActions = useConnectionActionSheet(props.connection.id)
  return <YGroup.Item>
  <ListItem iconAfter={ChevronRight} enterStyle={{ scale: 1.5, y: 50 * props.index, opacity: 0 }} animation="medium" onLongPress={showConnectionActions}>
     <XStack flex={1} justifyContent="space-between" alignItems="center" width={"100%"}>
        <SizableText size={"$6"}>{props.connection.label}</SizableText>
        <SizableText color={"$gray10Dark"} size={"$2"} flexGrow={1} maxWidth={"50%"} numberOfLines={1} paddingLeft={"$3"}>database.zoe-development.aws.very.long.url.com</SizableText>
        { props.connection.environment && <XStack borderRadius={4} overflow="hidden"><Text backgroundColor={"green"} padding={"$1.5"} overflow={"hidden"}>{props.connection.environment}</Text></XStack>}
      </XStack>
      
    
  </ListItem>
</YGroup.Item>
}

export default function ConnectionsList() {
  const connections = useConnectionsStore(state => state.connections)
  const [modalVisible, setModalVisible] = useState(false);

  return <YStack display="flex" justifyContent="space-between" height={"100%"} width="100%" maxWidth={600} padding={"$3"}>
      <YGroup separator={<Separator/>}>
        {connections.map((connection, index) => <ConnectionsListItem key={connection.id} connection={connection} index={index} />)}
      </YGroup>
      <Link href="/(connections)/add-new-connection" asChild><FloatingButton themeInverse><Plus/></FloatingButton></Link>
    </YStack>
}