/**
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import ToDoList from '../components/ToDoList';

export default connect((state) => ({
  items: state.items,
}), (dispatch) => ({
  onToggle: (index) => {
    dispatch(toggleTodo(index));
  },
  onRemove: (index) => {
    dispatch(removeTodo(index));
  },
}))(ToDoList);
