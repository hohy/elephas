import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { Input, Label } from "tamagui";
import ErrorLabel from "../error-label";

export default function FormInput<T extends FieldValues>(props: { label?: string, name: string, defaultValue: string, placeholder:string, control: Control<T>, rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined }) {
  const error = props.control._formState.errors[props.name]
  return <>
    { props.label ? <Label htmlFor={props.label}>{props.label}</Label> : null }
    <Controller 
      name={props.name}
      control={props.control as any}
      defaultValue={props.defaultValue ?? ''}
      rules={props.rules}
      render={({ field }) => <Input {...field} placeholder={props.placeholder} />}
      />
    { error?.message ? <ErrorLabel error={error.message as string}/> : null }
  </>
}