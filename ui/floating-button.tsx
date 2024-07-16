import { Button } from 'tamagui'

type ButtonProps = React.ComponentProps<typeof Button>

export default function FloatingButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      size="$6"
      shadowOffset={{ width: 0, height: 8 }}
      shadowColor={'$accentBackground'}
      shadowRadius={10}
      shadowOpacity={0.3}
      style={{
        position: 'absolute',
        bottom: 40,
        right: 20,
        width: 66,
        height: 66,
        borderRadius: '50%',
      }}
    />
  )
}
