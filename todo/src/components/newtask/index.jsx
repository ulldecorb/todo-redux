import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../../redux/actions/actionCreators';

function AddTask({ tasks = [], dispatch }) {
  const [newTask, setNewTask] = useState('');

  function handleNewTask() {
    const newId = tasks?.map((value) => value.id)
      .sort((a, b) => a - b)[tasks.length - 1] + 1 || 1;
    const completedNewTask = { id: newId, task: newTask };
    dispatch(addTask(completedNewTask));
    setNewTask('');
  }
  return (
    <>
      <input
        className="new-task__input"
        id="addTask"
        type="text"
        value={newTask}
        // eslint-disable-next-line react/no-unknown-property
        autocomplete="off"
        maxLength="20"
        placeholder="Add new task"
        onChange={(event) => setNewTask(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' && handleNewTask()}
      />
      <button type="button" onClick={handleNewTask}>+</button>
    </>
  );
}

AddTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(AddTask);
