import { USERS, PLAYER_COLOR, CALL_ACCEPTED, CALL_ENDED } from "./action.type"

const initailState = {
    playerColor: null,
    users : null,
    callAccepted: false,
    callEnded: false,
}

export const usersReducer = (state=initailState,action) => {
    switch(action.type){
        case USERS:
            return{
                ...state,
                users: action.payload
            }

        case PLAYER_COLOR:
            return{
                ...state,
                playerColor: action.payload
            }    

        case CALL_ACCEPTED:
            return{
                ...state,
                callAccepted: action.payload
            }   
        
        case CALL_ENDED:
            return{
                ...state,
                callEnded: action.payload
            }

        default:
            return state;
    }
}

