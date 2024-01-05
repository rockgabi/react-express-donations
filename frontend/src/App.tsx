import { Outlet } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

function App() {
  return (
    <div className="container">
      <div className="flex flex-col">
        <header className="min-h-24 p-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex gap-2">
                <NavigationMenuLink asChild>
                  <a className={navigationMenuTriggerStyle()} href="/">
                    Landing
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a className={navigationMenuTriggerStyle()} href="/">
                    Gallery
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </header>

        <div className="flex-1 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
