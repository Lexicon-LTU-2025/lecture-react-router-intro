import { type ReactElement } from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router';

export function App(): ReactElement {
  return (
    <>
      <Header />
      {/* Outlet acts as a placeholder for all the child routes */}
      <Outlet />
    </>
  );
}
