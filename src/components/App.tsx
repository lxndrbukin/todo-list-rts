import Header from './header/Header';
import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <div className="app-container">
      <Header />
      <main className="content-container">
        <Outlet />
      </main>
    </div>
  );
}
