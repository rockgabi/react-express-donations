import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import DataTable from './data-table';
import { Campaign, columns } from './data-table-columns';

const data: Campaign[] = [
  {
    id: 1,
    organizationId: 1,
    name: 'Campaign XYZ',
    description:
      'Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nulla nec odio eget urna volutpat aliquet. Sed nec nisl vitae urna aliquet aliquam.',
    goal: 999.99,
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
