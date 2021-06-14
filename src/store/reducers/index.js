import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import car from './car';
import basket from './basket';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    car,
    basket,
  });

export default rootReducer;
