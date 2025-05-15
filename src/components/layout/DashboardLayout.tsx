import React from 'react';
import { TopBar } from './TopBar';
import { MainNavigation } from '../navigation/MainNavigation';
import { SubNavigation } from '../navigation/SubNavigation';
import { MainContent } from './MainContent';
import { AiPanel } from '../panel/AiPanel';
import { useNavigation } from '../../hooks/useNavigation';

export const DashboardLayout: React.FC = () => {
  const { isAiPanelOpen, activeItem, isMenuExpanded } = useNavigation();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex">
          <div className={`transition-all duration-300 ${isMenuExpanded ? 'w-48' : 'w-[52px]'}`}>
            <MainNavigation />
          </div>
          {activeItem === 'Monitor' && (
            <SubNavigation />
          )}
        </div>
        <div className={`flex-1 transition-all duration-300 ${isAiPanelOpen ? 'mr-80' : ''}`}>
          <MainContent />
        </div>
        <AiPanel />
      </div>
    </div>
  );
};