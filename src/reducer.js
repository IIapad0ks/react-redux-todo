/**
 * ToDo List Reducer
 * @file
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { handleActions } from 'redux-actions';
import { addTodo, toggleTodo, removeTodo } from './actions';

export default handleActions({
  [addTodo]: (state, action) => ({
    items: [...state.items, {
      text: action.payload,
      isDone: false,
    }],
  }),
  [toggleTodo]: (state, action) => ({
    items: state.items.map((item, index) => {
      return (index === action.payload) ? Object.assign({}, item, {
        isDone: !item.isDone,
      }) : item;
    }),
  }),
}, {
  items: [],
});
