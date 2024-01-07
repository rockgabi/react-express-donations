import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="flex gap-2">
          <NavigationMenuLink asChild>
            <a className={navigationMenuTriggerStyle()} href="/">
              Landing
            </a>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <a className={navigationMenuTriggerStyle()} href="/gallery">
              Gallery
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
