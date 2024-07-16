import { useState } from 'react'
import { Keyboard } from 'react-native'
export default function useKeyboardVisible() {
  const [keyboardVisible, setKeyboardVisible] = useState(false)

  Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
  Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))

  return [keyboardVisible]
}
