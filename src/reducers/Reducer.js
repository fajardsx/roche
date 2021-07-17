import { ACTION_TYPE } from "../actions/action";

export default (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_AUTH:
      return {
        authType: action.value,
      };
    case ACTION_TYPE.UPDATE_FCM_TOKEN:
      return {
        tokenFcm: action.value,
      };
    default:
      return state;
  }
};
