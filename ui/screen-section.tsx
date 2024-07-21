import { ScrollView, View } from 'tamagui'

type ViewProps = React.ComponentProps<typeof View>

export default function ScreenSection(
  props: ViewProps & { scrollable?: boolean },
) {
  return (
    <View padding={props.scrollable ? 0 : '$3'} {...props}>
      {props.scrollable ? (
        <ScrollView padding={'$3'} children={props.children} />
      ) : (
        props.children
      )}
    </View>
  )
}
