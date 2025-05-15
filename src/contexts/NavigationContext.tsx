import React, { createContext, useState, useContext } from 'react';

interface NavigationContextType {
  activeItem: string;
  setActiveItem: (item: string) => void;
  activeSubItem: string;
  setActiveSubItem: (item: string) => void;
  isSubMenuOpen: boolean;
  toggleSubMenu: () => void;
  isAiPanelOpen: boolean;
  toggleAiPanel: () => void;
  isMenuExpanded: boolean;
  toggleMenu: () => void;
  isCollapsed: boolean;
  isSubMenuExpanded: boolean;
  toggleSubMenuExpanded: () => void;
  collapseAllMenus: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeItem, setActiveItem] = useState('Menu item 1');
  const [activeSubItem, setActiveSubItem] = useState('Menu item L2 1');
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(true);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleAiPanel = () => {
    setIsAiPanelOpen(!isAiPanelOpen);
  };

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
    if (!isMenuExpanded && activeItem === 'Monitor') {
      setIsSubMenuExpanded(true);
    }
  };

  const toggleSubMenuExpanded = () => {
    setIsSubMenuExpanded(!isSubMenuExpanded);
  };

  const collapseAllMenus = () => {
    setIsMenuExpanded(false);
    setIsSubMenuExpanded(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeItem,
        setActiveItem,
        activeSubItem,
        setActiveSubItem,
        isSubMenuOpen,
        toggleSubMenu,
        isAiPanelOpen,
        toggleAiPanel,
        isMenuExpanded,
        toggleMenu,
        isCollapsed: !isMenuExpanded,
        isSubMenuExpanded,
        toggleSubMenuExpanded,
        collapseAllMenus,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};