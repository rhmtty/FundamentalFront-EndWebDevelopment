
import './search-bar.js'

class TopBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
            <h2 class="title"><a href="">Movie Catalog</a></h2>
            <search-bar></search-bar>`
  }
}

customElements.define('top-bar', TopBar)
