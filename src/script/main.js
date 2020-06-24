import './component/tv-list.js'
import './component/movie-list.js'
import './component/top-bar.js'
import Data from './data.js'

const main = () => {
  const movieListElement = document.querySelector('movie-list')
  const tvListElement = document.querySelector('tv-list')
  const searchElement = document.querySelector('search-bar')
  const btnTvElement = document.querySelector('#btnTvElement')
  const btnMovieElement = document.querySelector('#btnMovieElement')

  const onButtonSearchClicked = async () => {
    try {
      const result = await Data.searchMovie(searchElement.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const showMovie = async () => {
    try {
      const result = await Data.movieList()

      btnMovieElement.classList.add('btn-primary')
      movieListElement.classList.add('show')

      if(tvListElement.classList.contains('show')) {
        tvListElement.classList.remove('show')
        // tvListElement.classList.remove('hidden')
      }

      // Menghapus class btn-primary pada btnTvElement ketika btnMovieElement mengandung class btn-primary
      if(btnMovieElement.classList.contains('btn-primary')) {
        btnTvElement.classList.remove('btn-primary')
      }

      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const onbtnTvClicked = async () => {
    try {
      const result = await Data.tvList()

      if(movieListElement.classList.contains('show')) {
        movieListElement.classList.remove('show')
        movieListElement.classList.add('hidden')
        btnTvElement.classList.add('btn-primary')
      }

      // Menghapus class btn-primary pada btnMovieElement ketika btnTvElement mengandung class btn-primary
      if(btnTvElement.classList.contains('btn-primary')) {
        btnMovieElement.classList.remove('btn-primary')
      }

      tvListElement.classList.add('show')
      renderTvResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = results => {
    movieListElement.movies = results
  }

  const renderTvResult = results => {
    tvListElement.tv = results
  }

  const fallbackResult = message => {
    movieListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
  btnMovieElement.addEventListener('click', showMovie)
  btnTvElement.addEventListener('click', onbtnTvClicked)
  showMovie()
}

export default main
