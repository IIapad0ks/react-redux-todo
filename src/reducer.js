/**
 * @file ToDo List Reducer
 * @module reducer
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { handleActions } from 'redux-actions';
import { addTodo, toggleTodo, removeTodo, changeInputText } from './actions';

/**
 * ToDo List Reducer
 * @type {ActionHandler}
 */
export default handleActions({
  [addTodo]: (state, action) => (Object.assign({}, state, {
    input: {
      text: '',
    },
    items: [
      ...state.items,
      { isDone: false, text: action.payload },
    ],
  })),
  [toggleTodo]: (state, action) => (Object.assign({}, state, {
    items: state.items.map((item, index) => (
      (index === action.payload) ? Object.assign({}, item, {
        isDone: !item.isDone,
      }) : item
    )),
  })),
  [removeTodo]: (state, action) => (Object.assign({}, state, {
    items: state.items.filter((item, index) => (index !== action.payload)),
  })),
  [changeInputText]: (state, action) => (Object.assign({}, state, {
    input: {
      text: action.payload,
    },
  })),
}, {
  input: {
    text: '',
  },
  items: [
    { isDone: true, text: 'ToDo #1' },
    { isDone: true, text: 'ToDo #2' },
    { isDone: false, text: 'ToDo #3' },
  ],
});

/**
 * Action Handler
 * @typedef {function} ActionHandler
 * @param {module:reducer~State} state - ToDo List current state
 * @param {module:actions~Action} action
 * @return {module:reducer~State} New ToDo List state
 */

/**
 * ToDo List Item State
 * @typedef {Object} ItemState
 * @property {boolean} isDone - ToDo Item done
 * @property {string} text - ToDo Item name
 */

/**
 * Application State
 * @typedef {Object} State
 * @property {Object} input - ToDo Text Input state
 * @property {string} input.text
 * @property {module:reducer~ItemState[]} items - ToDo Item List
 */
