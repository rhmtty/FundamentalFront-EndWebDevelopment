import './tv-item.js'

class TvList extends HTMLElement {
  /**
   * @param {any} tv
   */
  set tv(tv) {
    this._tv = tv
    this.render()
  }

  render() {
    this.innerHTML = ''
    this._tv.forEach(tv => {
      const tvItemElement = document.createElement('tv-item')
      tvItemElement.tv = tv
      this.appendChild(tvItemElement)
    })
  }

  renderError(message) {
    this.innerHTML = ''
    this.innerHTML += `<span>${message}</span>`
  }
}

customElements.define('tv-list', TvList)
