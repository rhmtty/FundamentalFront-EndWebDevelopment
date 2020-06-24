class TvItem extends HTMLElement {
  /**
     * @param {any} tv
     */
  set tv (tv) {
    this._tv = tv
    this.render()
  }

  render () {
    this.innerHTML = `
            <div class="card mb-3 mrgn border-info" style="max-width: 700px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                          this._tv.poster_path
                        }" class="card-img" alt="poster">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-info">
                            <h5 class="card-title">${this._tv.name}</h5>
                            <p class="card-text">${this._tv.first_air_date}</p>
                            <p class="card-text">${this._tv.overview}</p>
                            <p class="card-text"><small class="text-muted"><img src="https://image.freepik.com/free-vector/start_53876-25533.jpg" class="rating" alt="star"> ${
                              this._tv.vote_average
                            }</small></p>
                        </div>
                    </div>
                </div>
            </div>`
  }
}

customElements.define('tv-item', TvItem)
