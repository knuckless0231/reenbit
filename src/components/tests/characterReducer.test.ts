import {characterReducer, FetchAllCharacters, FetchFlag} from "../../redux/character-reducer";
import {GetCharactersResponseType} from "../../data-access-layer/api";

let startState:GetCharactersResponseType
beforeEach(()=>{
    startState = {
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
})

test('correct character should be mount to reducer state',()=>{

    const model:GetCharactersResponseType = {
        info: {
            count: 1,
            pages: 2,
            next: "",
            prev: null
        },
        results: [{
            id: 1,
            name: 'Kostya',
            status: 'Alive',
            species: '',
            type: 'Human',
            gender: 'Male',
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
            created: 'Earth',
        }],
        isFetching: true
    }

    const finalState = characterReducer(startState, FetchAllCharacters(model))
    expect(finalState.results[0].id).toBe(1)
    expect(finalState.results[0].name).toBe('Kostya')
    expect(finalState.isFetching).toBe(true)
})

test('correct loading flag should be mount to reducer state',()=>{

    const finalState = characterReducer(startState, FetchFlag(true))
    expect(finalState.results[0].id).toBe(0)
    expect(finalState.isFetching).toBe(true)
})
