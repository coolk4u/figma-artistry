
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Insights', 
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Accelerators', href: '/accelerators' }
      ]
    },
    { name: 'Salesforce Expertise', href: '/salesforce-expertise' },
    { name: 'About Us', href: '/about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(42,50,132,1)] shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ec04a159b9b6d80af3b88ba7dc27df8a838dafac?placeholderIfAbsent=true"
              alt="4CE Cloud Labs"
              className="h-10"
            />
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="text-white hover:text-blue-200 font-medium bg-transparent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white shadow-lg rounded-md p-2 min-w-[200px]">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <NavigationMenuLink key={dropdownItem.name} asChild>
                            <Link
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              {dropdownItem.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-white hover:text-blue-200 font-medium px-3 py-2 rounded-md transition-colors ${
                        location.pathname === item.href ? 'text-blue-200' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};
