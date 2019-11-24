import {
   
    TEST_STATE
  } from '../../types';
  
  /**
   * state
   */
  const initState = {
    userInfo: {
      avatar: '',
      create_time: '',
      email: '',
      id: '',
      img_url: '',
      introduce: '',
      name: '',
      password: '',
      phone: '',
      type: '',
      update_time: '',
      __v: 0,
      _id: '',
    },
    message: '',
    refresh: 1,
  };
  
  /**
   * reducer
   * @param {*} state
   * @param {*} action
   */
  export function user(state = initState, action) {
    switch (action.type) {
      case TEST_STATE:
        return {
          ...state,
          userInfo: action.payload.data,
          message: action.payload.message,
        };
      
      default:
        return state;
    }
  }
  