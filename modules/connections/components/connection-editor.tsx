import { Button, ScrollView, Separator, Spinner, XStack, YStack } from 'tamagui'
import { useForm } from 'react-hook-form'
import FormInput from '../../../ui/hook-form/input'
import { router } from 'expo-router'
import FormTextArea from '../../../ui/hook-form/text-area'
import { Keyboard } from 'react-native'
import { Connection } from '../hooks/conections-store'
import ConnectionDetail from './connection-detail'
import useConnectionTest from '../hooks/use-connection-test'
import * as Burnt from 'burnt'

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
  const { handleSubmit, control, getValues, watch } =
    useForm<ConnectionFormValues>({
      defaultValues: {
        label: props.connection?.label ?? '',
        environment: props.connection?.environment ?? '',
        connectionString: props.connection?.connectionString ?? '',
      },
    })

  const watchConnectionString = watch('connectionString')

  const onSubmit = (data: ConnectionFormValues) => {
    props.saveConnection(data)
    router.back()
  }

  const { mutateAsync: testConnection, isPending: isPendingConnectionTest } =
    useConnectionTest()
  const onConnectionTest = async () => {
    try {
      await testConnection(getValues().connectionString)

      Burnt.toast({
        title: 'Successfully connected',
        message: `to ${getValues().label}`,
        preset: 'done',
      })
    } catch (error) {
      Burnt.alert({
        title: 'Unable to connect',
        message: error.message,
        preset: 'error',
        duration: 5000,
        shouldDismissByTap: true,
      })
    }
  }

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
            placeholder="Untitled server"
            control={control}
            rules={{ required: 'Label is required' }}
          />
          <FormTextArea
            label="Connection string"
            name="connectionString"
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
            placeholder="Local"
            control={control}
          />
          <Separator />
          <ConnectionDetail connectionString={watchConnectionString} />
        </YStack>
      </ScrollView>
      <XStack gap="$2" width={'100%'} display="flex">
        <Button
          flexGrow={2}
          onPress={onConnectionTest}
          icon={isPendingConnectionTest ? <Spinner /> : undefined}
          disabled={isPendingConnectionTest}
        >
          {isPendingConnectionTest ? '' : 'Test'}
        </Button>
        <Button flexGrow={3} onPress={handleSubmit(onSubmit)} themeInverse>
          Save connection
        </Button>
      </XStack>
    </YStack>
  )
}
