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

export function updateTask(updatedTask) {
  return {
    type: actionTypes.UPDATE_TASK,
    updatedTask
  };
}

export function deleteTask(taskId) {
  return {
    type: actionTypes.DELETE_TASK,
    taskId
  };
}
