/**
 * @file ToDoInput Container
 * @module todo/containers/input
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { connect } from 'react-redux';
import { changeInputText, addTodo } from '../actions';
import ToDoInput from '../components/ToDoInput';

/**
 * ToDoInput Container
 * @type {Object}
 */
export default connect((state) => ({
  isDisabled: !state.input.text.trim().length,
  text: state.input.text,
}), (dispatch) => ({
  onChange: (e, value) => {
    dispatch(changeInputText(value));
  },
  onClick: (value) => {
    dispatch(addTodo(value));
  },
}))(ToDoInput);
