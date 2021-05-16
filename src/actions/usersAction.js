import axios from "axios";

export const traerTodosUsuarios = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: "traer_usuarios",
    payload: response.data,
  });
};
