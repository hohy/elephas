import { config as configBase } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import * as themes from './constants/theme-output'

export const config = createTamagui({ ...configBase, themes })

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
