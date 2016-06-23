/**
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { connect } from 'react-redux';
import ToDoProgressBar from '../components/ToDoProgressBar';

export default connect((state) => ({
  done: state.items.filter((item) => (item.isDone)).length,
  summary: state.items.length,
}))(ToDoProgressBar);
