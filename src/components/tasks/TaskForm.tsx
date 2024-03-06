export default function TaskForm(): JSX.Element {
  return (
    <div>
      <h3>Create New Task</h3>
      <form>
        <input placeholder="Type here..." type="text" />
        <button>Create Task</button>
      </form>
    </div>
  );
}
