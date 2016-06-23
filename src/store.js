/**
 * @file ToDo List Store
 * @author Bohdan Lubenets <bogdan.lubenets@dev-pro.net>
 */

import { createStore } from 'redux';
import reducer from './reducer';

/**
 * ToDo List Store
 * @typedef (Object} Store
 */
export default createStore(reducer);
