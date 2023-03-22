import { createContext } from 'react'


export const initState = {
    type: '',
    title: '',
    text: '',
}


// useContext 跨元件傳遞
export const MessageContext = createContext({});
//Reducer
export const messageReducer = (state,action)=>{
    switch (action.type){
    case "POST_MESSAGE":
        return{
            ...action.payload
        };
    case "CLEAR_MESSAGE":
        return{
            ...initState
        };
    default:
    return(state)
    }
}

export function handleSuccess(dispatch, res) {
    dispatch({
    type: 'POST_MESSAGE',
    payload: {
            type: 'success',
            title: '更新成功',
            text: res.data.message,
        }
    });
}

