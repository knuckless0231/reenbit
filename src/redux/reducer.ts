import {api, GetCharactersResponseType} from "../data-access-layer/api";
import {RootThunkType} from "./store";

export const initialState:GetCharactersResponseType = {
    info: {
        count: 0,
        pages: 0,
        next: "",
        prev: null
    },
    results: [{
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: '',
            url: '',
        },
        location: {
            name: '',
            url: '',
        },
        image: '',
        episode: [''],
        url: '',
        created: '',
    }]
}

export const reducer = (state:GetCharactersResponseType = initialState,action:AllActionsType):GetCharactersResponseType => {
    switch (action.type){
        case "FETCH-ALL-CHARACTERS": {
            return {...state,...action.response}
        }
        default: return state
    }
}

export const FetchAllCharacters = (response:GetCharactersResponseType) => {
    return {type:'FETCH-ALL-CHARACTERS',response}as const
}

export const FetchCurrentUser = (characterID:number) => {
    return{type:'FETCH-CURRENT-USER',characterID}as const
}

export const FetchAllCharactersTC = ():RootThunkType => dispatch => {
//    loader
    api.getCharacters()
        .then(response=>{
            dispatch(FetchAllCharacters(response.data))
        })
//    loader
}

export const FetchCurrentUserTC = (characterID:number):RootThunkType => dispatch => {
    //    loader
    api.getCurrentCharacter(characterID)
        .then(response=>{
            debugger
            console.log(response.data)
        })
    //    loader
}

export type AllActionsType = FetchAllCharactersActionType | FetchCurrentUserActionType
export type FetchAllCharactersActionType = ReturnType<typeof FetchAllCharacters>
export type FetchCurrentUserActionType = ReturnType<typeof FetchCurrentUser>

