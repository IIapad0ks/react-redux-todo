/**
 * @file ToDo root component
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import React from 'react';
import Paper from 'material-ui/Paper';

import ToDoProgressBar from '../containers/ToDoProgressBar';
import ToDoInput from '../containers/ToDoInput';
import ToDoList from '../containers/ToDoList';

/**
 * @classdesc ToDo Main Component
 * @constructor
 */
const ToDo = () => (
  <Paper style={{ width: '960px', margin: '15px auto' }}>
    <ToDoProgressBar />
    <ToDoInput />
    <ToDoList />
  </Paper>
);

export default ToDo;
