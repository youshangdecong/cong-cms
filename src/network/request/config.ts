//1.手动修改
// const BASE_URL = 'http://www.cong.comg/dev'
// const BASE_NAME = 'dev'

// const BASE_URL = 'http://www.cong.comg/pro'
// const BASE_NAME = 'dev'

// const BASE_URL = 'http://www.cong.comg/test'
// const BASE_NAME = 'dev'

// 2.通过 procress.node
let BASE_URL: string
let BASE_TIMEOUT: number
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  // BASE_URL = http://152.136.185.210:5000

  BASE_TIMEOUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.cong.comg/pro'
  BASE_TIMEOUT = 10000
} else {
  BASE_URL = 'http://www.cong.comg/test'
  BASE_TIMEOUT = 10000
}

export { BASE_URL, BASE_TIMEOUT }
