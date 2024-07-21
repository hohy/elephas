import { SafeAreaView } from 'react-native'
import { ScrollView, YStack } from 'tamagui'

type YStackProps = React.ComponentProps<typeof YStack>

export default function Screen(props: YStackProps & { scrollable?: boolean }) {
  return (
    <YStack height="100%" width="100%" maxWidth={600} {...props}>
      <SafeAreaView style={{ flex: 1 }}>
        {props.scrollable ? (
          <ScrollView children={props.children} />
        ) : (
          props.children
        )}
      </SafeAreaView>
    </YStack>
  )
}
