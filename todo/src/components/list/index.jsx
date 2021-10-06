import { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../../redux/actions/actioncCreators';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.lenght) dispatch(loadTasks());
  }, []);
  return (
    <section className="list">
      <ul className="list__box">
        {tasks.map((item) => (
          <li className="list__task">{item.task}</li>
        ))}
      </ul>
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
