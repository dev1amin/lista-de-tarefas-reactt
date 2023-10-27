import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TaskList from './tasklist';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('ativos');

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task App</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/ativos">Tarefas Ativas</Link>
            </li>
            <li>
              <Link to="/concluidas">Tarefas Concluídas</Link>
            </li>
          </ul>
        </div>
        <Route path="/ativos" exact>
          <button onClick={() => setFilter('ativos')}>Tarefas Ativas</button>
          <TaskList
            tasks={tasks.filter((task) => !task.completed)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </Route>
        <Route path="/concluidas">
          <button onClick={() => setFilter('concluídas')}>Tarefas Concluídas</button>
          <TaskList
            tasks={tasks.filter((task) => task.completed)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </Route>
      </Router>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(e.target.task.value);
          e.target.task.value = '';
        }}
      >
        <input type="text" name="task" placeholder="Adicionar tarefa" />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default TaskApp;