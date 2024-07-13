import { Anchor, Button, Paragraph, ScrollView, Text, View, XStack } from 'tamagui'
import { useConnectionsStore } from '.'
import ConnectionEditor, { ConnectionFormValues } from '../../components/connection-editor'
import { Keyboard } from 'react-native'
import ModalKeyboardAvoidingView from '../../ui/modal-keyboard-avoiding-view'
import useKeyboardVisible from '../../ui/keyboard-visible-hook'
import { useLocalSearchParams } from 'expo-router'

export default function EditConnectionScreen() {
  const connectionId = parseInt(useLocalSearchParams()['edit-connection'] as string)

  const updateConnection = useConnectionsStore((state) => state.updateConnection)
  const connections = useConnectionsStore((state) => state.connections)
  const [keyboardVisible] = useKeyboardVisible()

  const connection = connections.find(c => c.id === connectionId)

  function saveConnection(update: ConnectionFormValues) {
    updateConnection({ id: connectionId, ...update })
  }

  return (
    <ModalKeyboardAvoidingView>
    <View padding={"$3"} height={"100%"} paddingBottom={keyboardVisible ? "$3" : "$7"}>
      <ConnectionEditor connection={connection} saveConnection={saveConnection} />
    </View>
    </ModalKeyboardAvoidingView>

  )
}
