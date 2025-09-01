import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { PokemonView } from './views/PokemonView.tsx';
import { HomeView } from './views/HomeView.tsx';

// Declarative Router
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Layout component to the pokemonview, or all the child routes */}
      <Route path="/" element={<App />}>
        <Route index element={<HomeView />} />{' '}
        {/* An index route always renders togehter with its parent route */}
        <Route path=":pokemonName" element={<PokemonView />} />
      </Route>
      {/* An 'star' route works as a 'catch all' route. Perfect for displaying 404 pages or something similar. */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);
