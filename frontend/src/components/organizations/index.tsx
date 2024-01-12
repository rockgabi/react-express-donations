import { Outlet } from 'react-router-dom';
import List from './list';
import Create from './create';
import Update from './update';

export default function Organizations() {
  return (
    <div className="w-full p-4">
      <Outlet />
    </div>
  );
}

export { List, Create, Update };
