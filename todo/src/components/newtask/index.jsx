import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actioncCreators';

function AddTask({ tasks, dispatch }) {
  const [newTask, setNewTask] = useState('');
  function handleNewTask() {
    const newId = tasks.map((value) => value.id)
      .sort((a, b) => a - b)[tasks.length - 1] + 1;
    const completeNewTask = { task: newTask, id: newId };
    dispatch(addTask(completeNewTask));
    setNewTask('');
  }
  return (
    <form className="new-task">
      <input
        className="new-task__input"
        id="addTask"
        type="text"
        value={newTask}
        autocComplete="off"
        placeholder="Add new task"
        onChange={(event) => setNewTask(event.target.value)}
      />

      <button type="button" onClick={handleNewTask}>+</button>
    </form>
  );
}

AddTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
    // store
  };
}

export default connect(mapStateToProps)(AddTask);
