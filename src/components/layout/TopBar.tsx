import React from 'react';
import { Search, Settings, HelpCircle, User } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

export const TopBar: React.FC = () => {
  const { activeItem, collapseAllMenus } = useNavigation();

  return (
    <div className="flex items-center h-14 bg-blue-600 text-white px-4">
      <div className="flex items-center">
        <div className="grid place-items-center w-8 h-8 mr-3">
          <div className="w-6 h-6 bg-white rounded-md"></div>
        </div>
        <h1 className="text-lg font-medium">Product name</h1>
      </div>
      
      <div className="flex-1 mx-4 relative max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-blue-300" />
        </div>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-blue-500 text-white placeholder-blue-300 rounded-md py-1.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="p-1.5 hover:bg-blue-700 rounded-full">
          <Settings className="h-5 w-5" />
        </button>
        <button className="p-1.5 hover:bg-blue-700 rounded-full">
          <HelpCircle className="h-5 w-5" />
        </button>
        <button className="w-8 h-8 bg-blue-400 rounded-full overflow-hidden flex items-center justify-center">
          <User className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};