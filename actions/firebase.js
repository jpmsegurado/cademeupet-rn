import { ACTIONS } from "../reducers/firebase";


export const initApp = (app) => ({
  app,
  type: ACTIONS.INIT,
})