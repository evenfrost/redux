import { SET_VISIBILITY_FILTER, visibilityFilters } from './../actions';

export default function (state = visibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
