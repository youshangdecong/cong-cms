const dayjs = require('dayjs')
// const utc = require('dayjs/plugin/utc')
// dayjs.extend(utc)
export const fomatDataUtc = (date: any) => {
  // console.log(dayjs().format(date))
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')

  // return dayjs.utc().format(date)
}
