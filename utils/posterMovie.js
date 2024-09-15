
import imgDefault from '../src/assets/img-default.png'

export function posterMovie (path) {
  if (path) {
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  return imgDefault
}
