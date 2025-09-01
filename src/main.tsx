import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.tsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import { PokemonView } from './views/PokemonView.tsx';
import { pokemons } from './pokemons.ts';

// Declarative Router
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pikachu" element={<PokemonView pokemon={pokemons.pikachu} />} />
      <Route path="/charizard" element={<PokemonView pokemon={pokemons.charizard} />} />
      <Route path="/dragonite" element={<PokemonView pokemon={pokemons.dragonite} />} />
    
    </Routes>
  </BrowserRouter>
);
