import { createAction, handleActions } from "redux-actions";
export const actions = {
  retrieveUser: "USER/RETRIEVE_USER",
};

const INITIAL_STATE = {
  data: {}
};

export const retrieveUser = createAction(actions.retrieveUser);
export const setUser = createAction(actions.setUser);
export const removeUser = createAction(actions.removeUser);
export const makeGroup = createAction(actions.makeGroup);

export default handleActions(
  {
    [actions.setUser]: (state, action) => {
      return {
        ...state,
        data: action.payload
      };
    },
    [actions.removeUser]: (state, action) => {
      history.push("/");
      return {
        ...state,
        data: {}
      };
    }
  },
  INITIAL_STATE
);