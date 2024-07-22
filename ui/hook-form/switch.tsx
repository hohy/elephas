import { Control, Controller, FieldValues } from 'react-hook-form'
import { Label, Switch, XStack } from 'tamagui'
import ErrorLabel from '../error-label'

export default function FormSwitch<T extends FieldValues>(props: {
  label?: string
  name: string
  control: Control<T>
}) {
  const error = props.control._formState.errors[props.name]
  return (
    <XStack
      width="100%"
      flex={1}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {props.label ? <Label htmlFor={props.label}>{props.label}</Label> : null}
      <Controller
        name={props.name}
        control={props.control as Control}
        render={({ field }) => (
          <Switch
            onCheckedChange={field.onChange}
            onBlur={field.onBlur}
            defaultChecked={field.value}
            checked={field.value}
            native={true}
          />
        )}
      />
      {error?.message ? <ErrorLabel error={error.message as string} /> : null}
    </XStack>
  )
}
