import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  hasSubmenu?: boolean;
  isSubmenuOpen?: boolean;
  isCollapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  onClick,
  hasSubmenu = false,
  isSubmenuOpen = false,
  isCollapsed = false,
}) => {
  return (
    <button
      className={`flex items-center w-full px-3 py-2 text-sm ${
        isActive
          ? 'bg-blue-50 text-blue-600 font-medium border-l-2 border-blue-600'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
    >
      <div className="w-5 flex justify-center">
        {icon}
      </div>
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left ml-3">{label}</span>
          {hasSubmenu && (
            <ChevronRight className="w-4 h-4" />
          )}
        </>
      )}
    </button>
  );
};