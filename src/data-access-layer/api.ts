import axios from "axios"
import { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
})


export const api = {

    getCharacters() {
        return instance.get<GetCharactersResponseType>('character')
    },
    getCurrentCharacter(characterID:number) {
        return instance.get<GetCurrentCharacterResponseType>(`character${characterID}`)
    },


}


export type GetCharactersResponseType = {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: null
    },
    results: [
        GetCurrentCharacterResponseType
    ]
}
export type GetCurrentCharacterResponseType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: [string]
    url: string
    created: string
}
