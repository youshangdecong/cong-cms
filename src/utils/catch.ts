class PcCatch {
  setCatch(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCatch(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCacth(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCatch() {
    window.localStorage.clear()
  }
}
const pccatch = new PcCatch()
export { pccatch }
