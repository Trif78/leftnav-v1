import React from 'react';
import { Menu, MoreHorizontal } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';
import { NavItem } from './NavItem';

export const MainNavigation: React.FC = () => {
  const { activeItem, setActiveItem, toggleSubMenu, isMenuExpanded, toggleMenu } = useNavigation();

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    if (item === 'Monitor') {
      toggleSubMenu();
    }
  };

  return (
    <div className={`${isMenuExpanded ? 'w-48' : 'w-[52px]'} h-full border-r border-gray-200 bg-white overflow-y-auto flex flex-col transition-all duration-300`}>
      <div className="flex-1">
        <div className="px-3 py-2">
          <button
            onClick={toggleMenu}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 1" 
          isActive={activeItem === 'Menu item 1'} 
          onClick={() => handleItemClick('Menu item 1')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 2" 
          isActive={activeItem === 'Menu item 2'} 
          onClick={() => handleItemClick('Menu item 2')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 3" 
          isActive={activeItem === 'Menu item 3'} 
          onClick={() => handleItemClick('Menu item 3')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 4" 
          isActive={activeItem === 'Menu item 4'} 
          onClick={() => handleItemClick('Menu item 4')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 5" 
          isActive={activeItem === 'Menu item 5'} 
          onClick={() => handleItemClick('Menu item 5')}
          isCollapsed={!isMenuExpanded}
        />

        <div className="my-2 border-t border-gray-200"></div>

        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 6" 
          isActive={activeItem === 'Menu item 6'} 
          onClick={() => handleItemClick('Menu item 6')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 7" 
          isActive={activeItem === 'Menu item 7'} 
          onClick={() => handleItemClick('Menu item 7')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 8" 
          isActive={activeItem === 'Menu item 8'} 
          onClick={() => handleItemClick('Menu item 8')}
          isCollapsed={!isMenuExpanded}
        />
        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Menu item 9" 
          isActive={activeItem === 'Menu item 9'} 
          onClick={() => handleItemClick('Menu item 9')}
          isCollapsed={!isMenuExpanded}
        />

        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Monitor" 
          isActive={activeItem === 'Monitor'} 
          onClick={() => handleItemClick('Monitor')} 
          hasSubmenu
          isSubmenuOpen={activeItem === 'Monitor'}
          isCollapsed={!isMenuExpanded}
        />

        <NavItem 
          icon={<MoreHorizontal className="w-4 h-4" />} 
          label="More" 
          isActive={activeItem === 'More'} 
          onClick={() => handleItemClick('More')} 
          isCollapsed={!isMenuExpanded}
        />

        <div className="my-2 border-t border-gray-200"></div>

        <NavItem 
          icon={<div className="w-4 h-4 rounded-full border border-gray-400"></div>} 
          label="Platform item" 
          isActive={activeItem === 'Platform item'} 
          onClick={() => handleItemClick('Platform item')}
          isCollapsed={!isMenuExpanded}
        />
      </div>

      {isMenuExpanded && (
        <div className="p-3">
          <button className="flex items-center justify-center w-full py-2 px-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            <div className="mr-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">?</div>
            <span className="text-sm">Ask questions</span>
          </button>
        </div>
      )}
    </div>
  );
};