import actionTypes from './counter-types';

export const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});
