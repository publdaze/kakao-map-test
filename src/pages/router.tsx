import MainLayout from '@components/layout/MainLayout';
import { useRoutes } from 'react-router';
import Home from '@pages/Home/Home';

export const useMainRouter = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
