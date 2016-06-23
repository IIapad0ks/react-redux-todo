/**
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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

ToDoInput.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToDoInput;
