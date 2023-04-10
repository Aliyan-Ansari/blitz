import './App.css';
import Arena from './pages/Arena/Arena';
import Home from './pages/Home/Home';
import Overlays from './pages/Overlays/Overlays';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import GameGuides from './pages/GameGuides/GameGuides';
import Account from './pages/Account/Account';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className='App'>
          <Home />
        </div>
      ),
    },
    {
      path: 'overlays',
      element: (
        <div className='App'>
          <Overlays />
        </div>
      ),
    },
    {
      path: 'game-guides',
      element: (
        <div className='App'>
          <GameGuides />
        </div>
      ),
    },
    {
      path: 'arena',
      element: (
        <div className='App'>
          <Arena />
        </div>
      ),
    },
    {
      path: 'account',
      element: (
        <div className='App'>
          <Account />
        </div>
      ),
    },
  ]);
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
