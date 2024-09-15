import moment from "moment"

export function getYear (date) {
  return moment(date).format("YYYY")
}

export function formatTime (time) {
  const duration = moment.duration(time, "minutes")
  const hours = duration.hours()
  const minutes = duration.minutes()
  
  return `${hours}h ${minutes}min`
}
