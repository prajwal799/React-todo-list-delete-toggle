const TodoData = (props) => {
  const { tasks, handleDelete, ToggleStatus } = props;
  function tasksDelete(id) {
    handleDelete(id);
  }
  function tasksStatus(id, status) {
    ToggleStatus(id, status);
  }
  return (
    <div>
      <h3 key={tasks.id}>
        {tasks.titles} {tasks.status ? "Done" : "Not Done"}
        <button onClick={() => tasksStatus(tasks.id, tasks.status)}>
          Toggle
        </button>
        <button onClick={() => tasksDelete(tasks.id)}>Delete</button>
      </h3>
    </div>
  );
};
export default TodoData;
