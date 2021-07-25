export const Reducer = (state, action) => {
  switch (action.type) {
    case "Start_Fetching":
      return { isFetching: true, error: false, user: null };
    case "LOGIN_SUCCESS":
      return { isFetching: false, error: false, user: action.payload };
    case "LOGIN_FAILS":
      return { user: null, isFetching: false, error: true };
    case "LOG_OUT":
      return { user: null, isFetching: false, error: false };
    default:
      return state;
  }
};
