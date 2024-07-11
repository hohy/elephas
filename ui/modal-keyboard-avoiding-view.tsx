import { useState } from 'react';
import {
  KeyboardAvoidingViewProps,
  useWindowDimensions,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const FULL_SCREEN_MODAL_CARD_TOP_OFFSET = Platform.select({
  ios: 10, // This value is a constant for all types of iOS devices
  default: 0
})

const useFullScreenModalHeaderHeight = () => {
  const { top: topInset } = useSafeAreaInsets()
  const headerHeight = 70;// useHeaderHeight()
  return topInset + FULL_SCREEN_MODAL_CARD_TOP_OFFSET + headerHeight
}

export default function ModalKeyboardAvoidingView({
  children,
}: KeyboardAvoidingViewProps) {
  const [viewHeight, setViewHeight] = useState(0);
  const dim = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const keyboardVerticalOffset = useFullScreenModalHeaderHeight()

  return (
    <View
      style={style.container}
      onLayout={({
        nativeEvent: {
          layout: { height },
        },
      }) => {
        if (height) {
          setViewHeight(height);
        }
      }}
    >
      <RNKeyboardAvoidingView
        style={style.container}
        keyboardVerticalOffset={keyboardVerticalOffset}//{dim.height - viewHeight - bottom}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {children}
      </RNKeyboardAvoidingView>
    </View>
  );
}