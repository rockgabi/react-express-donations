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

export default function Organizations() {
  return (
    <div className="p-4">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
