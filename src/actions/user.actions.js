import { composeWithDevTools } from "redux-devtools-extension";

export const GET_USER = "GET_USER";

export const getUser = (token) => {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: GET_USER,
          payload: result.body,
        });
      })
      .catch((err) => console.log(err));
  };
};
