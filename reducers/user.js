export const ACTIONS = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN'
};

const defaultState = {};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {}
    case 'LOGIN':
      return {...action.user}
    default:
      return state
  }
}


export default user;