import { LOADING, ERROR, TRAER_TODOS } from "../types/usersTypes";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
