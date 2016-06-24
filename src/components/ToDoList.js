/**
 * @file ToDo List Component
 * @module todo/components/list
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';

import ToDoListItem from '../components/ToDoListItem';

/**
 * @classdesc ToDo List Component
 * @param {module:todo/components/list~ToDoListProperties} props
 * @constructor
 */
const ToDoList = (props) => (
  <div>
    {props.items.map((item, index) =>
      <ToDoListItem
        key={index}
        {...item}
        onToggle={() => props.onToggle(index)}
        onRemove={() => props.onRemove(index)}
      />
    )}
  </div>
);

/**
 * ToDoList Properties description
 * @type {{items: *, onToggle: *, onRemove: *}}
 */
ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToDoList;

/**
 * ToDoList Properties
 * @typedef {Object} ToDoListProperties
 * @property {module:reducer~ItemState[]} items
 * @property {module:todo/components/list~onToggleToDoListItemHandler} onToggle
 * @property {module:todo/components/list~onRemoveToDoListItemHandler} onRemove
 */

/**
 * ToDoListItem done toggle handler
 * @typedef {function} onToggleToDoListItemHandler
 * @param {number} index - ToDoListItem index in list
 */

/**
 * ToDoListItem remove handler
 * @typedef {function} onRemoveToDoListItemHandler
 * @param {number} index - ToDoListItem index in list
 */
