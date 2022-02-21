export function formDataNumber(data: number, count = 3) {
  let result = ''
  // debugger
  const count10 = 10 ** count

  while (data / count10 >= 1) {
    const dataStr = data.toString()

    result = `,${dataStr.slice(dataStr.length - count)}` + result

    data = Math.floor(data / count10)
  }

  return data + result
}
