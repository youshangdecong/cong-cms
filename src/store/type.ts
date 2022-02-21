import type { loginState } from './login/type'
import type { systemState } from './mian/system/type'
import type { IanalysisState } from './mian/analysis/type'

export interface rootState {
  name:string
  age:number

}
export interface rootLoginState {
  login:loginState
  system:systemState
  analysis:IanalysisState
}
export type State = rootState & rootLoginState
