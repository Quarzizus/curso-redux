import { LOADING, ERROR, TRAER_POR_USUARIO } from "../types/publicationsTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_POR_USUARIO:
      return {
        ...state,
        publications: action.payload,
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
