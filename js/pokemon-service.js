'use strict'

   function getPokemonList() {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=20", false)
      xhr.send()
      return JSON.parse(xhr.responseText).results
    }
  
    function getPokemonDetails(url) {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", url, false)
      xhr.send()
      return JSON.parse(xhr.responseText)
    }

  