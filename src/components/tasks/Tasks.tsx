import { Outlet } from 'react-router-dom';
import TaskForm from './TaskForm';

export default function Tasks(): JSX.Element {
  return (
    <section className="tasks">
      <Outlet />
      <TaskForm />
    </section>
  );
}
