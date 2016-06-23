/**
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';

import ToDoListItem from '../components/ToDoListItem';

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

ToDoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  })).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ToDoList;
