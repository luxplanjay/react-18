import { createAction, createReducer, combineReducers } from '@reduxjs/toolkit';

export const increment = createAction('counter/add');

const value = createReducer(0, {
  [increment]: (state, _) => state + 1,
});

export default combineReducers({
  value,
});
