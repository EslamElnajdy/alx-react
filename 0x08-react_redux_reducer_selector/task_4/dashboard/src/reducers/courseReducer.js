// reducers/courseReducer.js

import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

function courseReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.merge(fromJS(normalizedData));
    case SELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], false);
    default:
      return state;
  }
}

export default courseReducer;
