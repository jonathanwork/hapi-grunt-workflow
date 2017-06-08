//we add the reducers here

import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters


const initState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL

  ,todos: []
};

function todoApp(state = initState, action) {
  //not handling any actions
  //just return state
  switch(action.type) {

    //we don't mutate the object we make a clone of this Object
    //we do this by creating an empty object to assign as an argument
    //like so Object.assign({}, state, { state: action.filter })
    case SET_VISIBILITY_FILTER:

      //must have .babelrc plugin
      return { ...state , visibilityFilter: action.filter }

      //alternative
      //
      // return Object.assign({}, state, {
      //   visibilityFilter: action.filter
      // });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos
          ,{
            text: action.text
            ,completed: false
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state;
  }
};


export default todoApp;
