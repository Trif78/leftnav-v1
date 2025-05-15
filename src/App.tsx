import React from 'react';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { NavigationProvider } from './contexts/NavigationContext';

function App() {
  return (
    <NavigationProvider>
      <DashboardLayout />
    </NavigationProvider>
  );
}

export default App;