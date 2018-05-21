import { ACTIONS } from "../reducers/user";

export const logInUser = (user) => ({
  user,
  type: ACTIONS.LOGIN,
})