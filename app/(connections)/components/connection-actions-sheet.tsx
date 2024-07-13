import { useActionSheet } from "@expo/react-native-action-sheet";

export default function useConnectionActionSheet(connectionId: number) {
  const { showActionSheetWithOptions } = useActionSheet()
  const options = [ 'Connect', 'Edit', 'Delete', 'Cancel' ]
  const destructiveButtonIndex = 1
  const cancelButtonIndex = 2

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
            break
          case destructiveButtonIndex:
            // show delete confirmation
            break
          case cancelButtonIndex:
            // do nothing
            break
        }
      },
    )
  }
}