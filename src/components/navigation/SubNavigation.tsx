import React from 'react';
import { PanelLeftClose } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

export const SubNavigation: React.FC = () => {
  const { activeSubItem, setActiveSubItem, isSubMenuExpanded, toggleSubMenuExpanded } = useNavigation();

  const handleSubItemClick = (item: string) => {
    setActiveSubItem(item);
  };

  const renderButton = (itemNumber: number, isCollapsed: boolean) => {
    const itemName = `Menu item L2 ${itemNumber}`;
    return (
      <button
        key={itemNumber}
        className={`flex items-center w-full h-9 ${isCollapsed ? 'justify-center' : 'px-4'} text-sm ${
          activeSubItem === itemName ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => handleSubItemClick(itemName)}
        title={isCollapsed ? itemName : undefined}
      >
        <div className={`w-4 h-4 ${!isCollapsed && 'mr-2'} rounded-full ${activeSubItem === itemName ? 'bg-blue-600' : 'border border-gray-400'}`}>
          {activeSubItem === itemName && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          )}
        </div>
        {!isCollapsed && <span>{itemName}</span>}
      </button>
    );
  };

  return (
    <div className={`${isSubMenuExpanded ? 'w-60' : 'w-[52px]'} border-r border-gray-200 bg-gray-50 overflow-y-auto transition-all duration-300`}>
      <div className="flex items-center justify-between px-4 py-3">
        {isSubMenuExpanded && (
          <h2 className="text-sm font-semibold text-gray-900">Monitor</h2>
        )}
        <button
          onClick={toggleSubMenuExpanded}
          className={`p-1.5 hover:bg-gray-100 rounded-lg ${!isSubMenuExpanded && 'mx-auto'}`}
        >
          <PanelLeftClose className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {!isSubMenuExpanded && <div className="w-4 border-t border-gray-300 my-2 mx-auto"></div>}

      {isSubMenuExpanded ? (
        <>
          <div className="py-2 px-4 text-xs font-medium text-gray-500">
            Section header
          </div>
          {[1, 2, 3, 4, 5, 6, 7].map(num => renderButton(num, false))}

          <div className="py-2 px-4 text-xs font-medium text-gray-500 mt-2">
            Section header
          </div>
          {[8, 9].map(num => renderButton(num, false))}
        </>
      ) : (
        <div className="flex flex-col items-center">
          {[1, 2, 3, 4, 5, 6, 7].map(num => renderButton(num, true))}
          <div className="w-4 border-t border-gray-300 my-2"></div>
          {[8, 9].map(num => renderButton(num, true))}
        </div>
      )}
    </div>
  );
};