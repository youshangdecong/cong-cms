export interface options {
  value: string | number
  label:string
}
export interface styleLayout {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
}
export interface otherOptions {
  startPlaceholder:string | number
  endPlaceholder:string | number
}
export interface formItem {
  prop:string
  label:string
  placeholder?: string
  type: string
  options?:options[]
  otherOptions?:otherOptions
}
export interface IsearchConfig {
  labalWidth:string
  formItem:formItem[]
  styleLayout:styleLayout
}
