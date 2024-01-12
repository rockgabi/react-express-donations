import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import DataTable from './data-table';
import { Model as Tag, columns } from './data-table-columns';

const data: Tag[] = [
  {
    id: 1,
    name: 'Worldwide',
    label: 'worldwide',
  },
  {
    id: 2,
    name: 'Nature',
    label: 'nature',
  },
  {
    id: 3,
    name: 'Featured',
    label: 'featured',
  },
];

export default function Manage() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Input type="search" placeholder="Search" className="flex-1" />
        <Link to="new">
          <Button>Create New</Button>
        </Link>
      </div>
      <DataTable data={data} columns={columns} />
    </section>
  );
}
