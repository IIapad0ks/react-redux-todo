/**
 * @file ToDo List Item Component
 * @module todo/components/list/item
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { green50 } from 'material-ui/styles/colors';

/**
 * @classdesc ToDo List Item Component
 * @param {module:todo/components/list/item~ToDoListItemProperties} props
 * @constructor
 */
const ToDoListItem = (props) => (
  <Paper style={{ padding: '10px', backgroundColor: props.isDone ? green50 : 'white' }}>
    <Checkbox
      label={props.text}
      checked={props.isDone}
      onCheck={props.onToggle}
      style={{ width: '90%', marginRight: '15px', display: 'inline-block' }}
    />
    <FloatingActionButton mini={true} onClick={props.onRemove}>
      <NavigationClose />
    </FloatingActionButton>
  </Paper>
);

/**
 * ToDoListItem properties description
 * @type {{text: *, isDone: *, onToggle: *, onRemove: *}}
 */
ToDoListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToDoListItem;

/**
 * ToDoListItem properties
 * @typedef {Object} ToDoListItemProperties
 * @property {string} text - ToDoListItem text
 * @property {boolean} isDone - ToDoListItem done state
 * @property {module:todo/components/list~onToggleToDoListItemHandler} onToggle
 * @property {module:todo/components/list~onRemoveToDoListItemHandler} onRemove
 */
