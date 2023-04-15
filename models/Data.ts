export interface Input {
  name: string | null
  file: string | null
  caption: string | null
}

export interface Data extends Input {
  id: number
}

export interface PropsData {
  data: Input
  id: number
}
