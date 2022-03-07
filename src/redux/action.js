import { USERS, PLAYER_COLOR, CALL_ACCEPTED, CALL_ENDED } from "./action.type"

export const usersAction = (data) => {
    return{
        type: USERS,
        payload: data
    }
}

export const playerColorAction = (data) => {
    return{
        type: PLAYER_COLOR,
        payload: data
    }
}

export const callAcceptedAction = (data) => {
    return{
        type: CALL_ACCEPTED,
        payload: data
    }
}

export const callEndedAction = (data) => {
    return{
        type: CALL_ENDED,
        payload: data
    }
}
