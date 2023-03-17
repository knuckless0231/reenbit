import {searchNameReducer, SetFormValueAC} from "../redux/search-name-reducer";

test('correct value should be set into input',()=>{
    const startState = {
        formValue:''
    }
    const finalState = searchNameReducer(startState,SetFormValueAC('new value'))
    expect(finalState.formValue).toBe('new value')
})