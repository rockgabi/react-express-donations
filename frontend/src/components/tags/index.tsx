import { Outlet } from 'react-router-dom';
import List from './list';
import Create from './create';
import Update from './update';

function Layout() {
  return (
    <div className="w-full p-4">
      <Outlet />
    </div>
  );
}

const Tags = {
  Layout,
  List,
  Create,
  Update,
};

export default Tags;
