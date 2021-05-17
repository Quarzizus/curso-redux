import axios from "axios";
import { LOADING, ERROR, TRAER_POR_USUARIO } from "../types/publicationsTypes";
import * as usersTypes from "../types/usersTypes";

const { TRAER_TODOS: USERS_TRAER_TODOS } = usersTypes;

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
    // All publications
    const publicationsUdpdate = [...publications, response.data];
    // Last publication
    const publicactionsKey = publicationsUdpdate.length - 1;
    // get users
    const usersUpdate = [...users];
    // currently user updated
    usersUpdate[key] = {
      ...users[key],
      publicactionsKey: publicactionsKey,
    };

    dispatch({
      type: USERS_TRAER_TODOS,
      payload: usersUpdate,
    });

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
