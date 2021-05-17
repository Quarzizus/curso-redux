import axios from "axios";
import { LOADING, ERROR, TRAER_POR_USUARIO } from "../types/publicationsTypes";

export const traerPorUser = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  try {
    // getState
    const { users } = getState().usersReducer;
    const { publications } = getState().publicationsReducer;
    const user_id = users[key].id;

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );
    // new publications
    const publicationsUdpdate = [...publications, response.data];

    dispatch({
      type: TRAER_POR_USUARIO,
      payload: publicationsUdpdate,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
