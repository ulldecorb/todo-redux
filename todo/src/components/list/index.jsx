// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { loadTasks, deleteTask, updateTask } from '../../redux/actions/actionCreators';
import { loadTasks, deleteTask } from '../../redux/actions/actionCreators';
import AddTask from '../newtask/index';

function List({ tasks = [], dispatch }) {
  // const [task, setTask] = useState('');
  useEffect(() => {
    if (!tasks.lenght) dispatch(loadTasks());
  }, []);
  // console.log(task);

  // function getUpdatedtask() {
  //   dispatch(updateTask());
  // }

  return (
    <section className="list">
      <ul className="list__box">
        {tasks.map((item) => (

          <li className="list__task">
            {/* <input
              className="list__input"
              id="list"
              type="text"
              value={item.task}
              autocComplete="off"
              maxLength="20"
              placeholder={task}
              onChange={(event) => setTask(event.target.value)}
            /> */}

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
