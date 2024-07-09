import { ChevronRight } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, H1, ListItem, Separator, SizableText, Text, View, XStack, YGroup, YStack } from "tamagui";

function ConnectionsListItem({id, label, environment}: {id: number, label: string, environment: string }) {
  return <YGroup.Item>
  <ListItem iconAfter={ChevronRight}>
     <XStack flex={1} justifyContent="space-between" alignItems="center" width={"100%"}>
        <SizableText size={"$6"}>{label}</SizableText>
        <SizableText color={"$gray10Dark"} size={"$2"} flexGrow={1} maxWidth={"50%"} numberOfLines={1} paddingLeft={"$3"}>database.zoe-development.aws.very.long.url.com</SizableText>
        <XStack borderRadius={"$3"} overflow="hidden"><Text backgroundColor={"green"} padding={"$1.5"} overflow={"hidden"}>{environment}</Text></XStack>
      </XStack>
      
    
  </ListItem>
</YGroup.Item>
}

export default function ConnectionsList() {
  return <View>
    <YStack display="flex" justifyContent="space-between" height={"100%"} padding={"$3"}>
      <YGroup>
        <ConnectionsListItem id={1} label="Zoe" environment="PRODUCTION" />
        <Separator/>
        <ConnectionsListItem id={2} label="Zoe" environment="STAGING" />
        <Separator/>
        <ConnectionsListItem id={2} label="Surge" environment="PRODUCTION" />
        <Separator/>
        <ConnectionsListItem id={2} label="Surge" environment="DEVELOPMENT" />
        <Separator/>
        <ConnectionsListItem id={2} label="Local" environment="DEVELOPMENT" />
        <Separator/>
        <ConnectionsListItem id={2} label="Some long connection name" environment="DEVELOPMENT" />
      </YGroup>
      <Link href="/(connections)/add-new-connection" asChild><Button marginBottom="$10">Add a new connection</Button></Link>
    </YStack>
  </View> 
}