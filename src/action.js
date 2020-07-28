import {friendsArr} from './components/robot'

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
} from './constants';

const robots = friendsArr
export const setSearchField =(text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) =>{
    dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots
    });
}