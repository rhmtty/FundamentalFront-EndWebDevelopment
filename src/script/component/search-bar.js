class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  /**
   *
   * @param {any} event
   */
  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.querySelector('.search-form').value
  }

  render () {
    this.innerHTML = `
            <div class="search-bar">
                <input type="search" class="search-form" placeholder="Ketikkan kata kunci">
                <button id="search-button" type="submit">Search</button>
            </div>`

    this.querySelector('#search-button').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-bar', SearchBar)
