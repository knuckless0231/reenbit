import {api, GetCharactersResponseType} from "../data-access-layer/api";
import {RootThunkType} from "./store";

export const initialState: GetCharactersResponseType = {
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
    }],
    isFetching: false
}

export const characterReducer = (state: GetCharactersResponseType = initialState, action: AllCharacterReducerActionsType): GetCharactersResponseType => {
    switch (action.type) {
        case "FETCH-ALL-CHARACTERS": {
            return {...state, ...action.response}
        }
        case "FETCHING-FLAG" : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

//AC's
export const FetchAllCharacters = (response: GetCharactersResponseType) => {
    return {type: 'FETCH-ALL-CHARACTERS', response} as const
}
export const FetchFlag = (isFetching: boolean) => {
    return {type: 'FETCHING-FLAG', isFetching} as const
}

//thunk
export const FetchCurrentPageTC = (pageNumber:number): RootThunkType => dispatch => {
    dispatch(FetchFlag(true))
    //loader on
    // console.log(pageNumber)
    api.getCurrentPage(pageNumber)
        .then(response => {
            dispatch(FetchAllCharacters(response.data))
            dispatch(FetchFlag(false))
            //loader off
        })
}

//types
export type AllCharacterReducerActionsType = FetchAllCharactersActionType | FetchFlagActionType
export type FetchAllCharactersActionType = ReturnType<typeof FetchAllCharacters>
export type FetchFlagActionType = ReturnType<typeof FetchFlag>


