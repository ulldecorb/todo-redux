import actionTypes from '../actions/actionTypes';
import LIST from '../../constant/list.mock';

function listReducer(list = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return LIST;

    case actionTypes.ADD_TASK:
      return [
        ...list,
        action.newTask
      ];

    case actionTypes.DELETE_TASK:
      return [
        ...list.filter((task) => task.id !== action.taskId)
      ];

    case actionTypes.UPDATE_TASK:
      return list.map((task) => (task.id === action.updatedTask.id
        ? { ...task, ...action.updatedTask }
        : task
      ));

    default:
      return list;
  }
}

export default listReducer;
