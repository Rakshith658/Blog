import axios from "axios";

export const apiCalls = async (userCredentials, dispatch) => {
  dispatch({ type: "Start_Fetching" });
  try {
    const res = await axios.post("/auth/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILS" });
  }
};
