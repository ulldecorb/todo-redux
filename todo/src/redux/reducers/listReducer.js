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
        ...list.filter((x) => x.id !== action.taskId)
      ];
    case actionTypes.UPDATE_TASK:
      return [
        ...list
      ];
    default:
      return list;
  }
}

export default listReducer;
