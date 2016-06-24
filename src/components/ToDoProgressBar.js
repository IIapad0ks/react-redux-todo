/**
 * @file ToDo list progress bar component
 * @module todo/components/progressbar
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

/**
 * @classdesc ToDoProgressBar Component
 * @param {module:todo/components/progressbar~ToDoProgressBarProperties} props
 * @constructor
 */
const ToDoProgressBar = (props) => (
  <LinearProgress mode="determinate" value={props.done} min={0} max={props.summary} />
);

/**
 * ToDoProgressBar properties description
 * @type {{done: *, summary: *}}
 */
ToDoProgressBar.propTypes = {
  done: PropTypes.number.isRequired,
  summary: PropTypes.number.isRequired,
};

export default ToDoProgressBar;

/**
 * ToDoProgressBar properties
 * @typedef {{done: number, summary: number}} ToDoProgressBarProperties
 */
