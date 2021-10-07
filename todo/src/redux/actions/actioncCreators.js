import actionTypes from './actionTypes';

export function loadTasks() {
  return {
    type: actionTypes.LOAD_TASKS
  };
}

export function addTask(newTask) {
  return {
    type: actionTypes.ADD_TASK,
    newTask
  };
}

export function updateTask(taskId) {
  return {
    type: actionTypes.UPDATE_TASK,
    taskId
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}
