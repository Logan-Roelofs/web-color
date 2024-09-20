// components/Navbar.js
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";

const Navbar = () => {
  return (
    // Added border-b and border-border classes to add a bottom border with the color defined as --border in your Tailwind configuration
    <nav className="bg-primary-default text-primary-foreground shadow-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-lg cursor-pointer">
                  BrandName
                </span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Secondary Navbar Items */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="py-2 px-2 font-medium text-primary-foreground hover:bg-primary-foreground hover:text-background transition duration-300 rounded cursor-pointer"
            >
              Login
            </Link>
            <Button variant="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
