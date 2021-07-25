export const startlogin = () => ({
  type: "Start_Fetching",
});

export const loginsuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginfails = () => ({
  type: "LOGIN_FAILS",
});
export const loginfails = () => ({
  type: "LOG_OUT",
});
