import { SizableText, Text } from 'tamagui'

export default function ErrorLabel(props: { error?: string }) {
  return props.error ? (
    <SizableText size={'$1'} style={{ color: 'red' }} paddingTop="$2">
      {props.error}
    </SizableText>
  ) : (
    <></>
  )
}
