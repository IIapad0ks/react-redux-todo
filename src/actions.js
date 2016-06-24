/**
 * @file ToDo list Actions
 * @module actions
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { createAction } from 'redux-actions';

/**
 * @type {string}
 */
export const ADD_TODO = 'ADD_TODO';

/**
 * @type {string}
 */
export const TOGGLE_TODO = 'TOGGLE_TODO';

/**
 * @type {string}
 */
export const REMOVE_TODO = 'REMOVE_TODO';

/**
 * @type {string}
 */
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';

/**
 * Add ToDo action creator
 * @function
 * @param {string} text - ToDo text
 * @return {module:actions~Action}
 */
export const addTodo = createAction(ADD_TODO, text => text);

/**
 * Toggle ToDo action creator
 * @function
 * @param {number} index - ToDo index in list
 * @return {module:actions~Action}
 */
export const toggleTodo = createAction(TOGGLE_TODO, index => index);

/**
 * Remove Todo action creator
 * @function
 * @param {number} index - ToDo index in list
 * @return {module:actions~Action}
 */
export const removeTodo = createAction(REMOVE_TODO, index => index);

/**
 * Change ToDo Text action creator
 * @function
 * @param (string} text - ToDo text
 * @return {module:actions~Action}
 */
export const changeInputText = createAction(CHANGE_INPUT_TEXT, text => text);

/**
 * @typedef {Object} Action
 * @property {string} type
 * @property {*} payload
 */
