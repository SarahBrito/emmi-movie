import { Link } from 'react-router-dom'
import { posterMovie } from "../utils/posterMovie"
import { truncateTitle } from '../utils/truncateTitle'

import './style.css'

export function MovieCard ({ movies }) {

 return (
    <>
      {movies.map(movie => {
        return (
          <div className="movie" key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <div className='movie__img__container'>
                <img src={posterMovie(movie.poster_path)} />
              </div>
            </Link>
            <span className='movie__title'>{truncateTitle(movie.title)}</span>
          </div>
        )
      })}
    </>
 )
}
