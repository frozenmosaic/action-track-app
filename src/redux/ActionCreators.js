import * as ActionTypes from "./ActionTypes";

export const confirmCheck = (id) => ({
  type: ActionTypes.CONFIRM_CHECKBOX,
  payload: {
    id: id,
  },
});
