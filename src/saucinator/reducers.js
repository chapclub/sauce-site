import {
  RECEIVE_STATUS,
  SET_DRINK,
  MAKE_DRINK,
  ERROR
} from './actions';

const DEFAULT_STATUS = {
  busy: true,
  drink: null,
  currentPump: null,
  lastAction: null
};

const DEFAULT_STATE = {
  remoteStatus: DEFAULT_STATUS,
  lastAction: null,
  defaultDrink: null,
  error: null
};

export const state = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_STATUS:
      return {
        ...state,
        remoteStatus: payload.status,
        error: null
      };

    case MAKE_DRINK:
    case SET_DRINK:
      return {
        ...state,
        lastAction: action
      };

    case ERROR:
      return {
        ...state,
        error: payload.err
      };

    default:
      return state;
  }
};
