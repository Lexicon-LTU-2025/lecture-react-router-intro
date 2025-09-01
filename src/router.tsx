import { createBrowserRouter } from 'react-router';
import { App } from './components/App';
import { HomeView } from './views/HomeView';
import { PokemonView } from './views/PokemonView';

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
