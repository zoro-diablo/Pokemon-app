document.querySelector('#search').addEventListener('click', getPokemon)

function capitalizeLetter(string){
  return string.charAt(0).toUpperCase()+string.slice(1)
}

function lowerCaseName(string){
  return string.toLowerCase()
}

function getPokemon(e) {
  const name=document.querySelector('#pokemonName').value
  const pokeName=lowerCaseName(name)

  const pokiApi = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  pokiApi
    .then((res) => res.json())
    .then(
      (data) =>
        document.querySelector('.pokemonBox').innerHTML = `
        <div>
          <img
            src="${data.sprites.other['official-artwork'].front_default}"
            alt="${data.name}"
          />
        </div>
        <div class="pokemonInfo">
          <h1>${capitalizeLetter(data.name)}</h1>
          <p>Weight : ${data.weight}</p>
        </div>`
    )
    .catch((err) => console.log('Pokemon not Found', err))

  e.preventDefault()
}

