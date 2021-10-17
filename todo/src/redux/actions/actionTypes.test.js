/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import actionTypes from './actionTypes';

test('should have action-types', () => {
  const actions = actionTypes;
  expect(actions).toStrictEqual({
    LOAD_TASKS: 'LOAD_TASKS',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK'
  });
});
