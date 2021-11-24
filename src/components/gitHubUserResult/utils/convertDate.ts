var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const convertDate = (date: string): string => {
  const dateJs = new Date(date)
  const year = dateJs.getFullYear()
  const month = monthNames[dateJs.getMonth()]
  const day = ('0' + dateJs.getDate()).slice(-2)
  const dateFormatted = `${day} ${month} ${year}`
  return dateFormatted
}

export default convertDate
