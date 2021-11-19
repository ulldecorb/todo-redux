import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask, updateTask } from '../../redux/actions/actionCreators';
import AddTask from '../newtask/index';

function List({ tasks = [], dispatch }) {
  const [updatedTask, setUpdatedTask] = useState('');
  useEffect(() => {
    if (!tasks.lenght) dispatch(loadTasks());
  }, []);

  return (
    <section className="list">
      <ul className="list__box">
        {tasks.map((item) => (
          <li className="list__task" key={item.id}>

            <p className="task__title">
              {item.task}
            </p>
            <input
              className="list__input"
              id="list"
              type="text"
              value={updatedTask}
              maxLength="20"
              placeholder="Update task"
              onChange={(event) => setUpdatedTask(event.target.value)}
              autoComplete="off"
            />
            <button
              type="button"
              className="task__delete-button"
              onClick={() => dispatch(deleteTask(item.id))}
            >
              X
            </button>
            <button
              type="button"
              className="task__update-button"
              data-testid="update-button"
              onClick={() => dispatch(updateTask({ id: item.id, task: updatedTask }))}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <AddTask />
    </section>
  );
}

List.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(List);
