import axios from "axios";
import { LOADING, ERROR, TRAER_TODOS } from "../types/publicationsTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
