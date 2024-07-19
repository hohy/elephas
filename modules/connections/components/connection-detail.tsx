import { ListItem, Separator, Text, XStack, YGroup } from 'tamagui'
import { useConnectionString } from '../hooks/use-connection-string'

function KeyValueListItem(props: { label: string; value: string }) {
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

export default function ConnectionDetail(props: { connectionString: string }) {
  const connection = useConnectionString(props.connectionString)

  return (
    <YGroup separator={<Separator />}>
      <KeyValueListItem
        label="Host"
        value={
          connection?.hosts && connection.hosts.length > 0
            ? connection.hosts[0].host
            : ''
        }
      />
      <KeyValueListItem
        label="Port"
        value={
          connection?.hosts && connection.hosts.length > 0
            ? (connection.hosts[0].port?.toString() ?? '')
            : ''
        }
      />
      <KeyValueListItem label="Username" value={connection?.username ?? ''} />
      <KeyValueListItem label="Database" value={connection?.endpoint ?? ''} />
    </YGroup>
  )
}
