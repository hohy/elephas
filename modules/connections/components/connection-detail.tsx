import { ListItem, Separator, Text, XStack, YGroup } from 'tamagui'
import { parseConnectionString } from '../../../utils/connection-string-parser'

function KeyValueListItem(props: { label: string; value?: string }) {
  return (
    <YGroup.Item>
      <ListItem>
        <XStack display="flex" justifyContent="space-between" width="100%">
          <Text>{props.label}</Text>
          <Text>{props.value}</Text>
        </XStack>
      </ListItem>
    </YGroup.Item>
  )
}

export default function ConnectionDetail(props: {
  connectionString: string
  ssl: boolean
}) {
  const connection = parseConnectionString(props.connectionString)

  return (
    <YGroup separator={<Separator />}>
      <KeyValueListItem label="Host" value={connection?.host} />
      <KeyValueListItem label="Port" value={connection?.port?.toString()} />
      <KeyValueListItem label="Username" value={connection?.username} />
      <KeyValueListItem label="Database" value={connection?.database} />
      <KeyValueListItem label="SSL" value={`${props.ssl}`} />
    </YGroup>
  )
}
