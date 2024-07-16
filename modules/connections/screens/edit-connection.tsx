import { useLocalSearchParams } from 'expo-router'
import { useConnectionsStore } from '../hooks/conections-store'
import useKeyboardVisible from '../../../ui/keyboard-visible-hook'
import ConnectionEditor, {
  ConnectionFormValues,
} from '../../../components/connection-editor'
import ModalKeyboardAvoidingView from '../../../ui/modal-keyboard-avoiding-view'
import { View } from 'tamagui'

export default function EditConnectionScreen() {
  const connectionId = parseInt(
    useLocalSearchParams()['edit-connection'] as string,
  )

  const updateConnection = useConnectionsStore(
    (state) => state.updateConnection,
  )
  const connections = useConnectionsStore((state) => state.connections)
  const [keyboardVisible] = useKeyboardVisible()

  const connection = connections.find((c) => c.id === connectionId)

  function saveConnection(update: ConnectionFormValues) {
    updateConnection({ id: connectionId, ...update })
  }

  return (
    <ModalKeyboardAvoidingView>
      <View
        padding={'$3'}
        height={'100%'}
        paddingBottom={keyboardVisible ? '$3' : '$7'}
      >
        <ConnectionEditor
          connection={connection}
          saveConnection={saveConnection}
        />
      </View>
    </ModalKeyboardAvoidingView>
  )
}
