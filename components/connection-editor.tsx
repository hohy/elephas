import { Button, Form, Input, Label, ScrollView, Select, Separator, TextArea, XStack, YStack } from "tamagui";
import { Connection } from "../app/(connections)";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../ui/hook-form/input";
import { router } from "expo-router";
import ErrorLabel from "../ui/error-label";
import FormTextArea from "../ui/hook-form/text-area";
import { Keyboard } from "react-native";
import usePostgres from "../app/(connections)/components/use-pg";

export interface ConnectionFormValues {
  id?: number, 
  label: string, 
  environment?: string,
  connectionString: string
}

export default function ConnectionEditor(props: { connection?: Connection, saveConnection: (connection: ConnectionFormValues) => void}) {

  const { handleSubmit, control, formState: { errors }, getValues } = useForm<ConnectionFormValues>()
  const { connectionStatus, connect } = usePostgres()
  console.table(errors )

  const onSubmit = (data: ConnectionFormValues) => {
    props.saveConnection(data)
    router.back()
  }

  return <YStack display="flex" justifyContent="space-between" height="100%" width="100%" maxWidth={600} onPress={Keyboard.dismiss}>
      <ScrollView>
      <YStack flexShrink={1} paddingBottom="$5">
          <FormInput label="Name of connection" name="label" defaultValue={props.connection?.label ?? ''} placeholder="Untitled server" control={control} rules={{ required: 'Label is required' }} />
          <FormTextArea 
            label="Connection string" 
            name="connectionString" 
            defaultValue={props.connection?.connectionString ?? ''} 
            placeholder="postgres://username:password@hostname:port/database" 
            control={control} 
            rules={{ 
              pattern: { 
                value: /^postgres:\/\/(?:([a-zA-Z0-9_-]+)(?::([a-zA-Z0-9_-]+))?@)?([a-zA-Z0-9.-]+):(\d+)\/([a-zA-Z0-9_-]+)$/, 
                message: "Invalid format of the connection string" 
              },
              required: 'Connection string is required'
            }} 
          />
          <FormInput label="Environment" name="environment" defaultValue={props.connection?.environment ?? ''} placeholder="Local" control={control} />
      </YStack>
      </ScrollView>
      <XStack gap="$2" width={"100%"} display="flex">
        <Button flexGrow={2} onPress={() => { connect(getValues('connectionString')) }} >Test</Button> 
        <Button flexGrow={3} onPress={handleSubmit(onSubmit)} themeInverse>Save connection</Button>
      </XStack>
    </YStack>
}