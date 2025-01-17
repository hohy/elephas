import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'
import { Input, Label, YStack } from 'tamagui'
import ErrorLabel from '../error-label'

export default function FormInput<T extends FieldValues>(props: {
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
          <Input
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            placeholder={props.placeholder}
          />
        )}
      />
      {error?.message ? <ErrorLabel error={error.message as string} /> : null}
    </YStack>
  )
}
