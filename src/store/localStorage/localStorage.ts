import { RootState } from "../store";

export const saveState = (state:RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch(error){
        throw new Error('Could not save the state')
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState == null){
            return undefined
        }

        return JSON.parse(serializedState)
    } catch(error){
        return undefined
    }
}