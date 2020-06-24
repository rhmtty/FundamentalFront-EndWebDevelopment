import './movie-item.js'

class MovieList extends HTMLElement {
  /**
   * @param {any} movies
   */
  set movies (movies) {
    this._movies = movies
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._movies.forEach(movie => {
      const movieItemElement = document.createElement('movie-item')
      movieItemElement.movie = movie
      this.appendChild(movieItemElement)
    })
  }

  renderError (message) {
    this.innerHTML = ''
    this.innerHTML += `<span>${message}</span>`
  }
}

customElements.define('movie-list', MovieList)
