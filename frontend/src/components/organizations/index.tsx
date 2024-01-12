import { Outlet } from 'react-router-dom';
import List from './list';
import Create from './create';
import Update from './update';

export default function Organizations() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

export { List, Create, Update };
