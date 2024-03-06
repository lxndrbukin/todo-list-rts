import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<RouterProvider router={router} />);
}
