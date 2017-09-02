import { combineReducers } from 'redux';
import TechsReducer from './reducer_techs';
import ReposReducer from './reducer_repos';


const rootReducer = combineReducers({
    techs : TechsReducer,
    repos: ReposReducer
});

export default rootReducer;
