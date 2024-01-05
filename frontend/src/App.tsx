import React from 'react';
import logo from './logo.svg';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col">
      <header className="min-h-24">Header</header>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
