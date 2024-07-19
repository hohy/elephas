import {
  Button,
  Form,
  Input,
  Label,
  ScrollView,
  Select,
  Separator,
  TextArea,
  XStack,
  YStack,
} from 'tamagui'
import { useForm, Controller } from 'react-hook-form'
import FormInput from '../../../ui/hook-form/input'
import { router } from 'expo-router'
import ErrorLabel from '../../../ui/error-label'
import FormTextArea from '../../../ui/hook-form/text-area'
import { Keyboard } from 'react-native'
import { Connection } from '../hooks/conections-store'
import ConnectionDetail from './connection-detail'
import { testConnectionAsync } from '../../expo-postgres-client-kit'
import { ConnectionParams } from '../../expo-postgres-client-kit/src/ExpoPostgresClientKit.types'
import { useConnectionString } from '../hooks/use-connection-string'
import useConnectionTest from '../hooks/use-connection-test'

export interface ConnectionFormValues {
  id?: string
  label: string
  environment?: string
  connectionString: string
}

export default function ConnectionEditor(props: {
  connection?: Connection
  saveConnection: (connection: ConnectionFormValues) => void
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<ConnectionFormValues>()
  console.table(errors)

  const onSubmit = (data: ConnectionFormValues) => {
    props.saveConnection(data)
    router.back()
  }

  const connectionTest = useConnectionTest()

  return (
    <YStack
      display="flex"
      justifyContent="space-between"
      height="100%"
      width="100%"
      maxWidth={600}
      onPress={Keyboard.dismiss}
    >
      <ScrollView>
        <YStack flexShrink={1} paddingBottom="$5" gap="$3">
          <FormInput
            label="Name of connection"
            name="label"
            defaultValue={props.connection?.label ?? ''}
            placeholder="Untitled server"
            control={control}
            rules={{ required: 'Label is required' }}
          />
          <FormTextArea
            label="Connection string"
            name="connectionString"
            defaultValue={props.connection?.connectionString ?? ''}
            placeholder="postgres://username:password@hostname:port/database"
            control={control}
            rules={{
              pattern: {
                value:
                  /^postgres:\/\/(?:([a-zA-Z0-9_-]+)(?::([a-zA-Z0-9_-]+))?@)?([a-zA-Z0-9.-]+):(\d+)\/([a-zA-Z0-9_-]+)$/,
                message: 'Invalid format of the connection string',
              },
              required: 'Connection string is required',
            }}
          />
          <FormInput
            label="Environment"
            name="environment"
            defaultValue={props.connection?.environment ?? ''}
            placeholder="Local"
            control={control}
          />
          <Separator />
          <ConnectionDetail
            connectionString={
              getValues().connectionString ?? props.connection?.connectionString
            }
          />
        </YStack>
      </ScrollView>
      <XStack gap="$2" width={'100%'} display="flex">
        <Button
          flexGrow={2}
          onPress={() => connectionTest.mutate(getValues().connectionString)}
        >
          {connectionTest.isPending ? '🔄' : 'Test'}
        </Button>
        <Button flexGrow={3} onPress={handleSubmit(onSubmit)} themeInverse>
          Save connection
        </Button>
      </XStack>
    </YStack>
  )
}
