import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="home">
      <h2>To-Do List</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
