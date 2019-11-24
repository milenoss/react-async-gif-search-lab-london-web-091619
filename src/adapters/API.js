

const fetchGifs = query => {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=0mcS55oghlHUqq3wGrtX35XIAktb0Gil`)
      .then(resp => resp.json())
      .then(gifs => gifs.data.slice(0, 3))
  }
  
  export default {fetchGifs}