export interface User {
  name?: string;
}

export enum UserReduxActions {
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

interface ReduxAction {
  type: UserReduxActions.SET_USER | UserReduxActions.REMOVE_USER;
  payload?: User;
}

const userReducer = (
  state: User = {name: 'test'} as User,
  action: ReduxAction,
) => {
  switch (action.type) {
    case 'SET_USER': {
      const newState = {...state, ...action.payload};
      return newState;
    }
    default:
      return state;
  }
};

export default userReducer;
