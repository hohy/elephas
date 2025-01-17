import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'
import { Label, TextArea, YStack } from 'tamagui'
import ErrorLabel from '../error-label'

export default function FormTextArea<T extends FieldValues>(props: {
  label?: string
  name: string
  placeholder: string
  control: Control<T>
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined
}) {
  const error = props.control._formState.errors[props.name]
  return (
    <YStack>
      {props.label ? <Label htmlFor={props.label}>{props.label}</Label> : null}
      <Controller
        name={props.name}
        control={props.control as Control}
        rules={props.rules}
        render={({ field }) => (
          <TextArea
            size="$4"
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            placeholder={props.placeholder}
            textContentType="URL"
            keyboardType="visible-password"
          />
        )}
      />
      {error?.message ? <ErrorLabel error={error.message as string} /> : null}
    </YStack>
  )
}
