import { View } from 'tamagui'
import useKeyboardVisible from '../../../ui/keyboard-visible-hook'
import ModalKeyboardAvoidingView from '../../../ui/modal-keyboard-avoiding-view'
import { useConnectionsStore } from '../hooks/conections-store'
import ConnectionEditor from '../../../components/connection-editor'

export default function AddNewConnection() {
  const addConnection = useConnectionsStore((state) => state.addConnection)
  const [keyboardVisible] = useKeyboardVisible()

  return (
    <ModalKeyboardAvoidingView>
      <View
        padding={'$3'}
        height={'100%'}
        paddingBottom={keyboardVisible ? '$3' : '$7'}
      >
        <ConnectionEditor saveConnection={addConnection} />
      </View>
    </ModalKeyboardAvoidingView>
  )
}
