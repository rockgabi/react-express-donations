import { Outlet } from 'react-router-dom';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="container">
      <div className="flex flex-col h-[100vh] overflow-hidden">
        <header className="min-h-24 p-2">
          <NavBar />
        </header>

        <div className="flex-1 p-2 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
