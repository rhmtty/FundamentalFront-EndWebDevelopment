class Data {
  static async movieList () {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=4581fb4bc9f1c071af4e8573831b6f31&include_adult=false'
    )
    const responseJson = await response.json()
    if (responseJson.results) {
      return Promise.resolve(responseJson.results)
    } else {
      return Promise.reject('data not found')
    }
  }

  static async tvList() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/tv?api_key=4581fb4bc9f1c071af4e8573831b6f31&sort_by=popularity.desc'
    )
    const responseJson = await response.json()
    if (responseJson.results) {
      return Promise.resolve(responseJson.results)
    } else {
      return Promise.reject(`${keyword} is not found`)
    }
  }

  static async searchMovie (keyword) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=4581fb4bc9f1c071af4e8573831b6f31&query=${keyword}`
    )
    const responseJson = await response.json()
    if (responseJson.results.length > 0) {
      return Promise.resolve(responseJson.results)
    } else {
      return Promise.reject(`${keyword} is not found`)
    }
  }
}

export default Data
