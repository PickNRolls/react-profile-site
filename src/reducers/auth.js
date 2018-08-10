import * as types from '../actions/actionTypes';

var initialState = {
  user: {}
};

export default {
  auth: function (state = initialState, action) {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        console.log(action.user.name.first);
        return {
          user:action.user
        };

      case types.LOGIN_FAIL:
        console.log('Login fail...');
        return state;

      default:
        return state;
    }
  }
};