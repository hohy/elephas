import {
  Button,
  ListItem,
  SizableText,
  Text,
  View,
  XStack,
  YGroup,
} from 'tamagui'
import { Connection } from '../hooks/conections-store'
import useConnectionActionSheet from './connection-actions-sheet'
import { ChevronRight, Delete, XCircle } from '@tamagui/lucide-icons'
import { Swipeable } from 'react-native-gesture-handler'
import { Animated } from 'react-native'
import { useConnectionsStore } from '../hooks/conections-store'

function renderRightActions(handlePress: () => void) {
  return (progres, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })

    return (
      <View width={60} backgroundColor={'$red10Dark'}>
        <Animated.View
          style={[
            {
              transform: [{ scale: trans }],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            },
          ]}
        >
          <Button
            borderRadius={22}
            width={44}
            height={44}
            padding={0}
            backgroundColor={'$red10Light'}
            onPress={handlePress}
          >
            <XCircle color={'$color'} />
          </Button>
        </Animated.View>
      </View>
    )
  }
}

export default function ConnectionsListItem(props: {
  connection: Connection
  index: number
}) {
  const showConnectionActions = useConnectionActionSheet(props.connection.id)
  const { deleteConnection } = useConnectionsStore()
  return (
    <YGroup.Item key={props.connection.id}>
      <ListItem
        enterStyle={{ scale: 1.5, y: 50 * props.index, opacity: 0 }}
        animation="medium"
        onLongPress={showConnectionActions}
        padding={0}
      >
        <Swipeable
          renderRightActions={renderRightActions(() =>
            deleteConnection(props.connection.id),
          )}
          friction={2}
          containerStyle={{ flex: 1, height: '100%' }}
        >
          <XStack
            justifyContent="space-between"
            alignItems="center"
            width={'100%'}
            paddingHorizontal={18}
            paddingVertical={10}
            backgroundColor={'$background'}
          >
            <SizableText size={'$6'}>{props.connection.label}</SizableText>
            <SizableText
              color={'$gray10Dark'}
              size={'$2'}
              flexGrow={1}
              maxWidth={'50%'}
              numberOfLines={1}
              paddingLeft={'$3'}
            >
              database.zoe-development.aws.very.long.url.com
            </SizableText>
            {props.connection.environment && (
              <XStack borderRadius={4} overflow="hidden">
                <Text padding={'$1.5'} overflow={'hidden'}>
                  {props.connection.environment}
                </Text>
              </XStack>
            )}
            <ChevronRight />
          </XStack>
        </Swipeable>
      </ListItem>
    </YGroup.Item>
  )
}
