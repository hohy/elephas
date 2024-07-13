import { Anchor, Button, Paragraph, ScrollView, Text, View, XStack } from 'tamagui'
import { useConnectionsStore } from '.'
import ConnectionEditor from '../../components/connection-editor'
import { Keyboard } from 'react-native'
import ModalKeyboardAvoidingView from '../../ui/modal-keyboard-avoiding-view'
import useKeyboardVisible from '../../ui/keyboard-visible-hook'

export default function ModalScreen() {
  const addConnection = useConnectionsStore((state) => state.addConnection)
  const [keyboardVisible] = useKeyboardVisible()

  return (
    <ModalKeyboardAvoidingView>
    <View padding={"$3"} height={"100%"} paddingBottom={keyboardVisible ? "$3" : "$7"}>
      <ConnectionEditor saveConnection={addConnection} />
    </View>
    </ModalKeyboardAvoidingView>

  )
}
