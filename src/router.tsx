import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { App } from './components/App';
import { HomeView } from './views/HomeView';
import { PokemonView } from './views/PokemonView';

// Data router with object routes.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomeView /> },
      { path: ':pokemonName', element: <PokemonView /> },
    ],
  },
]);

// Data router with JSX routes.
export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeView />} />
      <Route path=":pokemonName" element={<PokemonView />} />
    </Route>
  )
);
