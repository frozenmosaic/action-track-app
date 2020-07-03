import { ACTIONS } from "../shared/actions";
import * as ActionTypes from "./ActionTypes"

export const ConfirmCheck = (state = ACTIONS, action) => {
  switch (action.type) {
    case ActionTypes.CONFIRM_CHECKBOX:
      var cfAct = action.payload;
      var newState = state.map((act) => {
        if (cfAct.id.includes(act.id)) return Object.assign({}, act, { confirm: !act.confirm})
        return act
      });

      return newState
      
    default:
      return state;
  }
};

// export default ConfirmCheck
