import { StyleSheet } from 'react-native'
import { SizableText } from 'tamagui'

const styles = StyleSheet.create({
  errorLabel: {
    color: 'red',
  },
})

export default function ErrorLabel(props: { error?: string }) {
  return props.error ? (
    <SizableText size={'$1'} style={styles.errorLabel} paddingTop="$2">
      {props.error}
    </SizableText>
  ) : (
    <></>
  )
}
