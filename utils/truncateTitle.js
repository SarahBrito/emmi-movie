export function truncateTitle (title, maxLength = 50) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + '...'
  }
  return title
}
