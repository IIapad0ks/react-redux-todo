/**
 * @file ToDoProgressBar Container
 * @module todo/containers/progressbar
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { connect } from 'react-redux';
import ToDoProgressBar from '../components/ToDoProgressBar';

/**
 * ToDoProgressBar Container
 * @type {Object}
 */
export default connect((state) => ({
  done: state.items.filter((item) => (item.isDone)).length,
  summary: state.items.length,
}))(ToDoProgressBar);
