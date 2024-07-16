type Theme = {
  accentBackground: string
  accentColor: string
  background0: string
  background025: string
  background05: string
  background075: string
  color1: string
  color2: string
  color3: string
  color4: string
  color5: string
  color6: string
  color7: string
  color8: string
  color9: string
  color10: string
  color11: string
  color12: string
  color0: string
  color025: string
  color05: string
  color075: string
  background: string
  backgroundHover: string
  backgroundPress: string
  backgroundFocus: string
  borderColor: string
  borderColorHover: string
  borderColorPress: string
  borderColorFocus: string
  color: string
  colorHover: string
  colorPress: string
  colorFocus: string
  colorTransparent: string
  placeholderColor: string
  outlineColor: string
}

function t(a: [number, number][]) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(85, 92%, 66%, 1)',
  'hsla(205, 26%, 91%, 0)',
  'hsla(205, 26%, 91%, 0.25)',
  'hsla(205, 26%, 91%, 0.5)',
  'hsla(205, 26%, 91%, 0.75)',
  'hsla(206, 26%, 91%, 1)',
  'hsla(206, 26%, 86%, 1)',
  'hsla(206, 26%, 82%, 1)',
  'hsla(206, 26%, 77%, 1)',
  'hsla(206, 26%, 73%, 1)',
  'hsla(206, 26%, 68%, 1)',
  'hsla(206, 26%, 64%, 1)',
  'hsla(206, 26%, 59%, 1)',
  'hsla(206, 26%, 55%, 1)',
  'hsla(206, 26%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 10%, 1)',
  'hsla(0, 14%, 10%, 0)',
  'hsla(0, 14%, 10%, 0.25)',
  'hsla(0, 14%, 10%, 0.5)',
  'hsla(0, 14%, 10%, 0.75)',
  'hsla(85, 92%, 61%, 1)',
  'hsla(203, 27%, 6%, 0)',
  'hsla(203, 27%, 6%, 0.25)',
  'hsla(203, 27%, 6%, 0.5)',
  'hsla(203, 27%, 6%, 0.75)',
  'hsla(206, 26%, 6%, 1)',
  'hsla(206, 26%, 9%, 1)',
  'hsla(206, 26%, 12%, 1)',
  'hsla(206, 26%, 15%, 1)',
  'hsla(206, 26%, 18%, 1)',
  'hsla(206, 26%, 21%, 1)',
  'hsla(206, 26%, 24%, 1)',
  'hsla(206, 26%, 27%, 1)',
  'hsla(206, 26%, 30%, 1)',
  'hsla(206, 26%, 33%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 95%, 1)',
  'hsla(0, 15%, 95%, 0)',
  'hsla(0, 15%, 95%, 0.25)',
  'hsla(0, 15%, 95%, 0.5)',
  'hsla(0, 15%, 95%, 0.75)',
  'hsla(85, 92%, 66%, 0)',
  'hsla(85, 92%, 66%, 0.25)',
  'hsla(85, 92%, 66%, 0.5)',
  'hsla(85, 92%, 66%, 0.75)',
  'hsla(85, 92%, 65%, 1)',
  'hsla(240, 11%, 43%, 1)',
  'hsla(240, 11%, 19%, 1)',
  'hsla(240, 11%, 19%, 0)',
  'hsla(240, 11%, 19%, 0.25)',
  'hsla(240, 11%, 19%, 0.5)',
  'hsla(240, 11%, 19%, 0.75)',
  'hsla(85, 92%, 64%, 1)',
  'hsla(85, 92%, 63%, 1)',
  'hsla(85, 92%, 62%, 1)',
  'hsla(85, 92%, 60%, 1)',
  'hsla(240, 11%, 90%, 1)',
  'hsla(240, 11%, 0%, 1)',
  'hsla(0, 0%, 0%, 0)',
  'hsla(0, 0%, 0%, 0.25)',
  'hsla(0, 0%, 0%, 0.5)',
  'hsla(0, 0%, 0%, 0.75)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
  'accentBackground',
  'accentColor',
  'background0',
  'background025',
  'background05',
  'background075',
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
  'color9',
  'color10',
  'color11',
  'color12',
  'color0',
  'color025',
  'color05',
  'color075',
  'background',
  'backgroundHover',
  'backgroundPress',
  'backgroundFocus',
  'borderColor',
  'borderColorHover',
  'borderColorPress',
  'borderColorFocus',
  'color',
  'colorHover',
  'colorPress',
  'colorFocus',
  'colorTransparent',
  'placeholderColor',
  'outlineColor',
]

const n1 = t([
  [0, 0],
  [1, 0],
  [2, 1],
  [3, 2],
  [4, 3],
  [5, 4],
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 8],
  [10, 9],
  [11, 10],
  [12, 11],
  [13, 12],
  [14, 13],
  [15, 14],
  [16, 15],
  [17, 16],
  [18, 17],
  [19, 18],
  [20, 19],
  [21, 20],
  [22, 5],
  [23, 4],
  [24, 6],
  [25, 6],
  [26, 8],
  [27, 7],
  [28, 9],
  [29, 8],
  [30, 16],
  [31, 15],
  [32, 16],
  [33, 15],
  [34, 17],
  [35, 13],
  [36, 18],
])

export const light = n1
const n2 = t([
  [0, 21],
  [1, 21],
  [2, 22],
  [3, 23],
  [4, 24],
  [5, 25],
  [6, 26],
  [7, 27],
  [8, 28],
  [9, 29],
  [10, 30],
  [11, 31],
  [12, 32],
  [13, 33],
  [14, 34],
  [15, 35],
  [16, 36],
  [17, 37],
  [18, 38],
  [19, 39],
  [20, 40],
  [21, 41],
  [22, 26],
  [23, 27],
  [24, 25],
  [25, 25],
  [26, 29],
  [27, 30],
  [28, 28],
  [29, 29],
  [30, 37],
  [31, 36],
  [32, 37],
  [33, 36],
  [34, 38],
  [35, 34],
  [36, 39],
])

export const dark = n2
const n3 = t([
  [0, 8],
  [1, 8],
  [2, 42],
  [3, 43],
  [4, 44],
  [5, 45],
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [11, 46],
  [12, 46],
  [13, 46],
  [14, 46],
  [15, 46],
  [16, 47],
  [17, 48],
  [18, 49],
  [19, 50],
  [20, 51],
  [21, 52],
  [22, 0],
  [23, 45],
  [24, 0],
  [25, 0],
  [26, 0],
  [27, 0],
  [28, 0],
  [29, 0],
  [30, 48],
  [31, 47],
  [32, 48],
  [33, 47],
  [34, 49],
  [35, 46],
  [36, 50],
])

export const light_accent = n3
const n4 = t([
  [0, 34],
  [1, 34],
  [2, 42],
  [3, 43],
  [4, 44],
  [5, 45],
  [6, 0],
  [7, 0],
  [8, 46],
  [9, 53],
  [10, 53],
  [11, 54],
  [12, 55],
  [13, 21],
  [14, 21],
  [15, 56],
  [16, 57],
  [17, 58],
  [18, 59],
  [19, 60],
  [20, 61],
  [21, 62],
  [22, 0],
  [23, 0],
  [24, 45],
  [25, 45],
  [26, 53],
  [27, 53],
  [28, 46],
  [29, 53],
  [30, 58],
  [31, 57],
  [32, 58],
  [33, 57],
  [34, 59],
  [35, 21],
  [36, 60],
])

export const dark_accent = n4
const n5 = t([
  [30, 15],
  [31, 14],
  [32, 15],
  [33, 14],
])

export const light_alt1 = n5
const n6 = t([
  [30, 14],
  [31, 13],
  [32, 14],
  [33, 13],
])

export const light_alt2 = n6
const n7 = t([
  [22, 8],
  [23, 7],
  [24, 9],
  [25, 9],
  [26, 11],
  [27, 10],
  [29, 11],
  [28, 12],
])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([
  [22, 6],
  [23, 5],
  [24, 7],
  [25, 7],
  [26, 9],
  [27, 8],
  [29, 9],
  [28, 10],
])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([
  [22, 7],
  [23, 6],
  [24, 8],
  [25, 8],
  [26, 10],
  [27, 9],
  [29, 10],
  [28, 11],
])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([
  [22, 10],
  [23, 10],
  [24, 11],
  [25, 11],
  [26, 10],
  [27, 10],
  [29, 11],
  [28, 11],
])

export const light_surface4 = n10
const n11 = t([
  [30, 36],
  [31, 35],
  [32, 36],
  [33, 35],
])

export const dark_alt1 = n11
const n12 = t([
  [30, 35],
  [31, 34],
  [32, 35],
  [33, 34],
])

export const dark_alt2 = n12
const n13 = t([
  [22, 29],
  [23, 30],
  [24, 28],
  [25, 28],
  [26, 32],
  [27, 33],
  [29, 32],
  [28, 31],
])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([
  [22, 27],
  [23, 28],
  [24, 26],
  [25, 26],
  [26, 30],
  [27, 31],
  [29, 30],
  [28, 29],
])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([
  [22, 28],
  [23, 29],
  [24, 27],
  [25, 27],
  [26, 31],
  [27, 32],
  [29, 31],
  [28, 30],
])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([
  [22, 31],
  [23, 31],
  [24, 30],
  [25, 30],
  [26, 31],
  [27, 31],
  [29, 30],
  [28, 30],
])

export const dark_surface4 = n16
const n17 = t([
  [30, 47],
  [31, 46],
  [32, 47],
  [33, 46],
])

export const light_accent_alt1 = n17
const n18 = t([
  [30, 46],
  [31, 46],
  [32, 46],
  [33, 46],
])

export const light_accent_alt2 = n18
const n19 = t([
  [22, 0],
  [23, 0],
  [24, 0],
  [25, 0],
  [26, 46],
  [27, 46],
  [29, 46],
  [28, 46],
])

export const light_accent_active = n19
export const light_accent_surface3 = n19
export const light_accent_Button = n19
export const light_accent_SliderTrackActive = n19
const n20 = t([
  [22, 0],
  [23, 0],
  [24, 0],
  [25, 0],
  [26, 0],
  [27, 0],
  [29, 0],
  [28, 46],
])

export const light_accent_surface1 = n20
export const light_accent_ListItem = n20
export const light_accent_SelectTrigger = n20
export const light_accent_Card = n20
export const light_accent_Progress = n20
export const light_accent_TooltipArrow = n20
export const light_accent_SliderTrack = n20
export const light_accent_Input = n20
export const light_accent_TextArea = n20
const n21 = t([
  [22, 0],
  [23, 0],
  [24, 0],
  [25, 0],
  [26, 46],
  [27, 0],
  [29, 46],
  [28, 46],
])

export const light_accent_surface2 = n21
export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([
  [22, 46],
  [23, 46],
  [24, 46],
  [25, 46],
  [26, 46],
  [27, 46],
  [29, 46],
  [28, 46],
])

export const light_accent_surface4 = n22
const n23 = t([
  [30, 57],
  [31, 56],
  [32, 57],
  [33, 56],
])

export const dark_accent_alt1 = n23
const n24 = t([
  [30, 56],
  [31, 21],
  [32, 56],
  [33, 21],
])

export const dark_accent_alt2 = n24
const n25 = t([
  [22, 53],
  [23, 53],
  [24, 46],
  [25, 46],
  [26, 55],
  [27, 21],
  [29, 55],
  [28, 54],
])

export const dark_accent_active = n25
export const dark_accent_surface3 = n25
export const dark_accent_Button = n25
export const dark_accent_SliderTrackActive = n25
const n26 = t([
  [22, 0],
  [23, 46],
  [24, 0],
  [25, 0],
  [26, 53],
  [27, 54],
  [29, 53],
  [28, 53],
])

export const dark_accent_surface1 = n26
export const dark_accent_ListItem = n26
export const dark_accent_SelectTrigger = n26
export const dark_accent_Card = n26
export const dark_accent_Progress = n26
export const dark_accent_TooltipArrow = n26
export const dark_accent_SliderTrack = n26
export const dark_accent_Input = n26
export const dark_accent_TextArea = n26
const n27 = t([
  [22, 46],
  [23, 53],
  [24, 0],
  [25, 0],
  [26, 54],
  [27, 55],
  [29, 54],
  [28, 53],
])

export const dark_accent_surface2 = n27
export const dark_accent_Checkbox = n27
export const dark_accent_Switch = n27
export const dark_accent_TooltipContent = n27
export const dark_accent_RadioGroupItem = n27
const n28 = t([
  [22, 54],
  [23, 54],
  [24, 53],
  [25, 53],
  [26, 54],
  [27, 54],
  [29, 53],
  [28, 53],
])

export const dark_accent_surface4 = n28
const n29 = t([
  [30, 6],
  [31, 5],
  [32, 7],
  [33, 7],
  [22, 16],
  [23, 15],
  [24, 16],
  [25, 15],
  [26, 14],
  [27, 13],
  [29, 12],
  [28, 11],
])

export const light_SwitchThumb = n29
export const light_SliderThumb = n29
export const light_Tooltip = n29
export const light_ProgressIndicator = n29
const n30 = t([[22, 63]])

export const light_SheetOverlay = n30
export const light_DialogOverlay = n30
export const light_ModalOverlay = n30
export const light_accent_SheetOverlay = n30
export const light_accent_DialogOverlay = n30
export const light_accent_ModalOverlay = n30
const n31 = t([
  [30, 27],
  [31, 28],
  [32, 26],
  [33, 26],
  [22, 37],
  [23, 36],
  [24, 37],
  [25, 36],
  [26, 35],
  [27, 34],
  [29, 33],
  [28, 32],
])

export const dark_SwitchThumb = n31
export const dark_SliderThumb = n31
export const dark_Tooltip = n31
export const dark_ProgressIndicator = n31
const n32 = t([[22, 64]])

export const dark_SheetOverlay = n32
export const dark_DialogOverlay = n32
export const dark_ModalOverlay = n32
export const dark_accent_SheetOverlay = n32
export const dark_accent_DialogOverlay = n32
export const dark_accent_ModalOverlay = n32
const n33 = t([
  [30, 0],
  [31, 0],
  [32, 0],
  [33, 0],
  [22, 48],
  [23, 47],
  [24, 48],
  [25, 47],
  [26, 46],
  [27, 46],
  [29, 46],
  [28, 46],
])

export const light_accent_SwitchThumb = n33
export const light_accent_SliderThumb = n33
export const light_accent_Tooltip = n33
export const light_accent_ProgressIndicator = n33
const n34 = t([
  [30, 0],
  [31, 46],
  [32, 0],
  [33, 0],
  [22, 58],
  [23, 57],
  [24, 58],
  [25, 57],
  [26, 56],
  [27, 21],
  [29, 21],
  [28, 55],
])

export const dark_accent_SwitchThumb = n34
export const dark_accent_SliderThumb = n34
export const dark_accent_Tooltip = n34
export const dark_accent_ProgressIndicator = n34
