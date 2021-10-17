/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import {
  loadTasks, addTask, updateTask, deleteTask
} from './actionCreators';

// import { render, document } from '@testing-library/react';
// import actionTypes from './actionTypes';

// test('actiontypes are in the document', () => {
//   render(actionTypes);
//   const addType = document.getByText(/add_task/i);
//   expect(addType).toBeInTheDocument();
// });

describe('loadTask', () => {
  test('should return LOAD_TASKS', () => {
    const action = loadTasks();
    expect(action).toStrictEqual({ type: 'LOAD_TASKS' });
  });
});

describe('addTask', () => {
  test('should return ADD_TASK', () => {
    const newTask = {};
    const action = addTask(newTask);
    expect(action).toStrictEqual({
      type: 'ADD_TASK',
      newTask
    });
  });
});

describe('updateTask', () => {
  test('should return UPDATE_TASK', () => {
    const updatedTask = {};
    const action = updateTask(updatedTask);
    expect(action).toStrictEqual({
      type: 'UPDATE_TASK',
      updatedTask
    });
  });
});

describe('deleteTask', () => {
  test('should return DELETE_TASK', () => {
    const taskId = {};
    const action = deleteTask(taskId);
    expect(action).toStrictEqual({
      type: 'DELETE_TASK',
      taskId
    });
  });
});
