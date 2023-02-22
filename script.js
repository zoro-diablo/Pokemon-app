// Done Using then and catch method --->
// -----------------------------------------------


// document.querySelector('#search').addEventListener('click', getPokemon)

// function capitalizeLetter(string){
//   return string.charAt(0).toUpperCase()+string.slice(1)
// }

// function lowerCaseName(string){
//   return string.toLowerCase()
// }

// function getPokemon(e) {
//   const name=document.querySelector('#pokemonName').value
//   const pokeName=lowerCaseName(name)

//   const pokiApi = fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
//   pokiApi
//     .then((res) => res.json())
//     .then(
//       (data) =>
// document.querySelector('.pokemonBox').innerHTML = `
// <div>
//   <img
//     src="${data.sprites.other['official-artwork'].front_default}"
//     alt="${data.name}"
//   />
// </div>
// <div class="pokemonInfo">
//   <h1>${capitalizeLetter(data.name)}</h1>
//   <p>Weight : ${data.weight}</p>
// </div>`
//     )
//     .catch((err) => console.log('Pokemon not Found', err))

//   e.preventDefault()
// }

// Done using Async method --->
// -----------------------------------------


const CLIENT_ID = '641f56d0a51886600bf9'
const CLIENT_SECRETS = 'bdfbbe501ea091a95cf95a96fd01b2f24350b0df'

async function getPoki(name) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}?client_id=${CLIENT_ID}&client_secrets=${CLIENT_SECRETS}`
  )
  const profile = await res.json()
  return profile
}

document.querySelector('#search').addEventListener('submit', async (e) => {
  e.preventDefault()
  const pokemonName = document.querySelector('#pokemonName').value
  const pokiName = toLowerString(pokemonName)

  const profile = await getPoki(pokiName)

  showPokiInfo(profile)
})

function toCapitaliseString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function toLowerString(string) {
  return string.toLowerCase()
}

function showPokiInfo(profile) {
  document.querySelector('.pokemonBox').innerHTML = `
        <div>
          <img
            src="${profile.sprites.other['official-artwork'].front_default}"
            alt="${profile.name}"
          />
        </div>
        <div class="pokemonInfo">
          <h1>${toCapitaliseString(profile.name)}</h1>
          <p>Weight : ${profile.weight}</p>
        </div>`
}
