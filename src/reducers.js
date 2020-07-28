import {
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_SUCCESS,
   } from './constants';
import {friendsArr} from './components/robot'


const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: friendsArr
}

export const requestRobots = (state = initialStateRobots, action={}) =>{
    switch(action.type){
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots:action.payload, isPending:false}
        default:
            return state;
    }

}