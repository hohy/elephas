import { useActionSheet } from '@expo/react-native-action-sheet'
import { router } from 'expo-router'
import { useConnectionsStore } from '../hooks/conections-store'

export default function useConnectionActionSheet(connectionId: string) {
  const { showActionSheetWithOptions } = useActionSheet()
  const { deleteConnection } = useConnectionsStore()

  const options = ['Connect', 'Edit', 'Delete', 'Cancel']
  const destructiveButtonIndex = 2
  const cancelButtonIndex = 3

  return function showActionSheet() {
    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 0:
            // show connect modal
            break
          case 1:
            // show edit modal
            router.push(`/(connections)/${connectionId}`)
            break
          case destructiveButtonIndex:
            deleteConnection(connectionId)
            break
          case cancelButtonIndex:
            // do nothing
            break
        }
      },
    )
  }
}
