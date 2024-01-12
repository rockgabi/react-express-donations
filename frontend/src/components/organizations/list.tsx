import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import DataTable from './data-table';
import { Organization, columns } from './data-table-columns';

const data: Organization[] = [
  {
    id: 'organization-1',
    name: 'Organization 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nulla nec odio eget urna volutpat aliquet. Sed nec nisl vitae urna aliquet aliquam.',
    tags: ['tag-1', 'tag-2', 'tag-3'],
  },
  {
    id: 'organization-2',
    name: 'Organization 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nulla nec odio eget urna volutpat aliquet. Sed nec nisl vitae urna aliquet aliquam.',
    tags: ['tag-2', 'tag-3', 'tag-4'],
  },
  {
    id: 'organization-3',
    name: 'Organization 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur a dipiscing elit. Nulla nec odio eget urna volutpat aliquet. Sed nec nisl vitae urna aliquet aliquam.',
    tags: ['tag-1', 'tag-3', 'tag-5'],
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
