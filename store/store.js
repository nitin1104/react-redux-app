import { createStore } from 'redux';
import {combineReducers} from 'redux'
import addEmplyee from '../reducer/reducer'
let rootreducer=combineReducers({
    employeeList:addEmplyee
})

let store = createStore(rootreducer);
export default store;
