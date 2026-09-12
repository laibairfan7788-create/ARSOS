import React from 'react';
import AppRoutes from './routes/AppRoutes';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();
  return <AppRoutes />;
}

export default App;