import { ListItem, SizableText, Text, XStack, YGroup } from "tamagui"
import { Connection } from "../hooks/conections-store"
import useConnectionActionSheet from "./connection-actions-sheet"
import { ChevronRight } from "@tamagui/lucide-icons"

export default function ConnectionsListItem(props: {connection: Connection, index: number}) {
  const showConnectionActions = useConnectionActionSheet(props.connection.id)
  return <YGroup.Item>
  <ListItem iconAfter={ChevronRight} enterStyle={{ scale: 1.5, y: 50 * props.index, opacity: 0 }} animation="medium" onLongPress={showConnectionActions}>
    {/* <Swipeable renderLeftActions={renderLeftActions}>  */}
     <XStack flex={1} justifyContent="space-between" alignItems="center" width={"100%"}>
        <SizableText size={"$6"}>{props.connection.label}</SizableText>
        <SizableText color={"$gray10Dark"} size={"$2"} flexGrow={1} maxWidth={"50%"} numberOfLines={1} paddingLeft={"$3"}>database.zoe-development.aws.very.long.url.com</SizableText>
        { props.connection.environment && <XStack borderRadius={4} overflow="hidden"><Text backgroundColor={"green"} padding={"$1.5"} overflow={"hidden"}>{props.connection.environment}</Text></XStack>}
      </XStack>
    {/* </Swipeable> */}
  </ListItem>
</YGroup.Item>
}