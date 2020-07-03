import * as ActionTypes from "./ActionTypes"

export const confirmCheck = (id) => {
    return {
        type: ActionTypes.CONFIRM_CHECKBOX,
        payload: {
            id: id,
        }
    }
}