import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { user } from './module/user';


const rootReducer = history =>
  combineReducers({
    user,
  
    router: connectRouter(history),
  });

export default rootReducer;
