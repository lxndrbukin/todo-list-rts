import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header>
      <span>todo.</span>
      <ul>
        <li>
          <Link to="/tasks/new">New</Link>
        </li>
        <li>
          <Link to="/tasks/completed">Completed</Link>
        </li>
        <li>
          <Link to="/tasks/deleted">Deleted</Link>
        </li>
      </ul>
    </header>
  );
}
