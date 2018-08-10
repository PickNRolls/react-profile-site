import * as types from './actionTypes';
import apiAuth from '../api/auth';

export function login (data) {
  return function (dispatch) {
    return apiAuth.login(data)
    .then((user) => {
      if (user) dispatch(loginSuccess(user));
      else dispatch(loginFail());
    })
    .catch(err => {
      throw err
    });
  };
};

export function loginSuccess (user) {
  return {
    type: types.LOGIN_SUCCESS,
    user
  };
};

export function loginFail () {
  return {
    type: types.LOGIN_FAIL
  };
}
