/**
 * @file ToDOInput
 * @module todo/components/input
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * @classdesc ToDo Input Component
 * @param {module:todo/components/input~ToDoInputProperties} props
 * @constructor
 */
const ToDoInput = (props) => (
  <div style={{ margin: '10px' }}>
    <TextField
      hintText="ToDo"
      value={props.text}
      onChange={props.onChange}
      style={{ width: '90%', marginRight: '15px' }}
    />
    <FloatingActionButton disabled={props.isDisabled} onClick={() => props.onClick(props.text)}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

/**
 * ToDoInputProperties description
 * @type {{isDisabled: *, text: *, onChange: *, onClick: *}}
 */
ToDoInput.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoInput;

/**
 * ToDoInput properties
 * @typedef {Object} ToDoInputProperties
 * @property {boolean} isDisabled - Add button disable option
 * @property {string} text - ToDoInput text
 * @property {module:todo/components/input~onToDoInputChangeHandler} onChange -
 * ToDoInput text field value change handler
 * @property {module:todo/components/input~onToDoAddHandler} onClick -
 * ToDoInput add button click handler
 */

/**
 * ToDoInput Change Handler
 * @typedef {function} onToDoInputChangeHandler
 * @param {string} text - Current ToDoInput text value
 */

/**
 * ToDoInput Add ToDo Handler
 * @typedef {function} onToDoAddHandler
 * @param {string} text - Current ToDoInput text value
 */
