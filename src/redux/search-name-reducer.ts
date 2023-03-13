
const initialState: InitialStateType = {
    formValue:''
}

export const searchNameReducer = (state: InitialStateType = initialState, action: SetFormValueActionType): InitialStateType => {
    switch (action.type) {
        case "SET-FORM-VALUE": {
            return {...state,formValue:action.value}
        }
        default:
            return state
    }
}

export const SetFormValueAC = (value: string) => {
    return {type: "SET-FORM-VALUE", value} as const
}
export type SetFormValueActionType = ReturnType<typeof SetFormValueAC>


type InitialStateType = {
        formValue:string
    }
