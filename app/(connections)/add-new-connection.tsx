import { Anchor, Button, Paragraph, ScrollView, Text, View, XStack } from 'tamagui'
import { useConnectionsStore } from '.'
import ConnectionEditor from '../../components/connection-editor'
import { KeyboardAvoidingView } from 'react-native'
import ModalKeyboardAvoidingView from '../../ui/modal-keyboard-avoiding-view'

export default function ModalScreen() {
  const addConnection = useConnectionsStore((state) => state.addConnection)
  return (
    <ModalKeyboardAvoidingView>
    <View padding={"$3"} height={"100%"} paddingBottom={"$7"}>
      <ConnectionEditor saveConnection={addConnection} />
    </View>
    </ModalKeyboardAvoidingView>

  )
}
