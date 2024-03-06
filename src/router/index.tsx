import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Tasks from '../components/tasks/Tasks';
import TasksList from '../components/tasks/TasksList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/tasks',
        element: <Tasks />,
        children: [
          {
            path: '/tasks/:taskType',
            element: <TasksList />,
          },
        ],
      },
    ],
  },
]);
