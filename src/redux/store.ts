import {applyMiddleware, combineReducers, Dispatch, legacy_createStore} from "redux";
import {AllActionsType, reducer} from "./reducer";
import thunk from 'redux-thunk'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


const rootReducer = combineReducers({
    reducer: reducer
})

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const store =  legacy_createStore(rootReducer,applyMiddleware(thunk))


export type AppDispatchType = ThunkDispatch<RootReducersType, void, AllActionsType>
export type RootReducersType = ReturnType<typeof rootReducer>
export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducersType, unknown, AllActionsType>
export type RootStateType = ReturnType<typeof store.getState>


