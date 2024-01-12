import { Nav, NavLinkDef } from '@/components/admin/nav';
import { Separator } from '@/components/ui/separator';
import { Building2, Coins } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const links: NavLinkDef[] = [
  {
    title: 'Organizations',
    icon: Building2,
    href: '/admin/organizations',
    variant: 'default',
  },
  {
    title: 'Campaigns',
    icon: Coins,
    href: '/admin/campaigns',
    variant: 'default',
  },
];

export default function Admin() {
  return (
    <div className="flex rounded-[0.5rem] border bg-background shadow-md md:shadow-xl h-full">
      <section className="flex flex-col gap-4 py-4">
        <Nav links={links} isCollapsed={false} />
      </section>
      <Separator orientation="vertical" className="h-auto" />

      <Outlet />
    </div>
  );
}
