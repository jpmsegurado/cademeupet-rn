export const ACTIONS = {
  INIT: 'INIT',
};

const defaultState = null;

const user = (state = defaultState, action) => {
  switch (action.type) {
    case 'INIT':
      return {...action.value}
    default:
      return state
  }
}


export default user;