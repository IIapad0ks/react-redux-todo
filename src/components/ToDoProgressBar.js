/**
 * ToDo list progress bar component
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ToDoProgressBar = (props) => (
  <LinearProgress mode="determinate" value={props.done} min={0} max={props.summary} />
);

ToDoProgressBar.propTypes = {
  done: PropTypes.number.isRequired,
  summary: PropTypes.number.isRequired,
};

export default ToDoProgressBar;
