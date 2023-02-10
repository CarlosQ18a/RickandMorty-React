export const rickAndMortyCharacter = 'https://rickandmortyapi.com/api/character'
export const rickAndMortyLocalizations = 'https://rickandmortyapi.com/api/location'
export const rickAndMortyEpisodes = 'https://rick-and-morty-production-9ae5.up.railway.app/episodes'


export const fetchRickAndMorty = async (url:string) => {
    return fetch(url).then(res=> res.json())
}
export const createRickAndMortFetch= async (url: string, { arg }:any) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg)
    })
}

export const updateRickAndMortyFetch= async (url: string, { arg }:any) => {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(arg)
    })
}
