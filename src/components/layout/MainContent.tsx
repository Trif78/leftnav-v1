import React from 'react';
import { useNavigation } from '../../hooks/useNavigation';

export const MainContent: React.FC = () => {
  const { activeItem, activeSubItem, toggleAiPanel } = useNavigation();

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {activeItem === 'Monitor' && activeSubItem 
            ? activeSubItem 
            : activeItem}
        </h1>
        <button
          onClick={toggleAiPanel}
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          AI panel
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6 min-h-[400px]">
        <p className="text-gray-600">
          This is the main content area for {activeItem === 'Monitor' && activeSubItem 
            ? activeSubItem 
            : activeItem}.
        </p>
        <p className="text-gray-600 mt-4">
          You can customize this area to display the relevant content for each menu item.
        </p>
      </div>
    </div>
  );
};