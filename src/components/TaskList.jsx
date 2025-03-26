import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={`task-item ${task.priority.toLowerCase()}`}>
          <span>{task.text} ({task.priority})</span>
          <button onClick={() => dispatch(removeTask(index))}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
