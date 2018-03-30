import { getStatus, setDrink, makeDrink, validateDrink } from './api';

export const REQUEST_STATUS = 'REQUEST_STATUS';
export const RECEIVE_STATUS = 'RECEIVE_STATUS';
export const SET_DRINK = 'SET_DRINK';
export const MAKE_DRINK = 'MAKE_DRINK';

export const ERROR = 'ERROR';

export const Creators = {
  requestStatus: () => ({
    type: REQUEST_STATUS,
  }),

  receiveStatus: (status) => ({
    type: RECEIVE_STATUS,
    payload: {
      status
    }
  }),

  setDrink: (drink) => ({
    type: SET_DRINK,
    payload: {
      drink
    }
  }),

  makeDrink: (drink) => ({
    type: MAKE_DRINK,
    payload: {
      drink
    }
  }),

  error: (err) => ({
    type: ERROR,
    payload: {
      err
    }
  })
};

export const Actions = {
  getStatus: () => (dispatch) => {
    dispatch(Creators.requestStatus());

    return getStatus().then(status => {
      dispatch(Creators.receiveStatus(status));
    }).catch(err => {
      dispatch(Creators.error(err));
    });
  },

  setDrink: (drink) => (dispatch) => {
    if (!validateDrink(drink)) {
      dispatch(Creators.error(new Error('Invalid drink: ' + drink)));
      return null;
    }

    dispatch(Creators.setDrink(drink));

    return setDrink(drink).then(status => {
      if (!status) dispatch(Creators.error(new Error('/drink/set - No drink provided.')));
      else dispatch(Creators.receiveStatus(status));
    }).catch(err => {
      dispatch(Creators.error(err));
    });
  },

  makeDrink: (drink) => (dispatch) => {
    if (drink && !validateDrink(drink)) {
      dispatch(Creators.error(new Error('Invalid drink: ' + drink)));
      return null;
    }

    dispatch(Creators.makeDrink(drink));

    return makeDrink(drink).then(status => {
      if (!status) dispatch(Creators.error(new Error('/drink/set - No drink provided.')));
      else dispatch(Creators.receiveStatus(status));
    }).catch(err => {
      dispatch(Creators.error(err));
    });
  },
};
