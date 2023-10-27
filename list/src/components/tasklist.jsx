function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          {task.text}
          <button onClick={() => deleteTask(index)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;