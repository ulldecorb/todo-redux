import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask } from '../../redux/actions/actioncCreators';
import AddTask from '../newtask/index';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.lenght) dispatch(loadTasks());
  }, []);

  return (
    <section className="list">
      <ul className="list__box">
        {tasks.map((item) => (
          <li className="list__task">
            <p className="task__title">
              {item.task}
            </p>
            <button
              type="button"
              className="task__delete-button"
              onClick={() => dispatch(deleteTask(item.id))}
            >
              X
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
