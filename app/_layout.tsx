import '../tamagui-web.css'
import '@tamagui/core/reset.css'

import { useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, useColorScheme } from 'react-native'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from './Provider'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'connections-list',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  gestureHandlerRoorView: {
    flex: 1,
  },
})

const queryClient = new QueryClient()

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.gestureHandlerRoorView}>
        <ActionSheetProvider>
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.keyboardAvoidingView}
          >
            <Provider>
              <ThemeProvider
                value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
              >
                <Stack initialRouteName="connections">
                  <Stack.Screen
                    name="(connections)"
                    options={{
                      headerShown: false,
                    }}
                  />
                </Stack>
              </ThemeProvider>
            </Provider>
          </KeyboardAvoidingView>
        </ActionSheetProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
