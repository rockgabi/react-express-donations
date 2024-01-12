import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-2">
          <NavigationMenuLink asChild>
            <Link className={navigationMenuTriggerStyle()} to="/">
              Landing
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link className={navigationMenuTriggerStyle()} to="/gallery">
              Gallery
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link className={navigationMenuTriggerStyle()} to="/admin">
              Admin
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
