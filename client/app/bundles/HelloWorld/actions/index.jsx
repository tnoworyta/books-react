import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../constants/constants'

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});
