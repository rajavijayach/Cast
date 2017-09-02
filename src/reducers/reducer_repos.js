import _ from 'lodash';
import {FETCH_REPOS} from '../actions/index';


export default function (state={}, action){
    switch(action.type){
        case FETCH_REPOS:
            return action.payload.data;
        default:
            return state;
    }
}