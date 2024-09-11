import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../shared/components/header/header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <Outlet />
    </>
  ),
});
