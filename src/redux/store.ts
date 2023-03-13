import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {AllCharacterReducerActionsType, characterReducer} from "./character-reducer";
import thunk from 'redux-thunk'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AllSearchReducerActionsType, searchNameReducer} from "./search-name-reducer";


const rootReducer = combineReducers({
    characterReducer: characterReducer,
    searchName: searchNameReducer
})

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const store =  legacy_createStore(rootReducer,applyMiddleware(thunk))


export type RootActionsType = AllSearchReducerActionsType | AllCharacterReducerActionsType
export type AppDispatchType = ThunkDispatch<RootReducersType, any, RootActionsType>
export type RootReducersType = ReturnType<typeof rootReducer>
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducersType, unknown, RootActionsType>
export type RootStateType = ReturnType<typeof store.getState>


