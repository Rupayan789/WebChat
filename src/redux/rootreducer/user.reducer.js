import { userConstant } from "../action/constant"

const initState={
    users:[],
    conversations:[]
}
export const userReducer=(state=initState,action)=>{
    switch(action.type)
    {
        case `${userConstant.GET_REALTIME_USERS}_REQUEST`:
            state={
                ...initState
            }
            break;
        case `${userConstant.GET_REALTIME_USERS}_SUCCESS`:
            state={
                ...initState,
                users:action.payload.users
            }
            break;
        // case `${userConstant.GET_REALTIME_USERS}_FAILURE`:
        case userConstant.GET_REALTIME_MESSAGES:
            state={
                ...state,
                conversations:action.payload.conversations
            }
            break;
    }
    return state;
}