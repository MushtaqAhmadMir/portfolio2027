import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ControlBar } from './components/DeviceFrame/ControlBar';
import { DeviceChassis } from './components/DeviceFrame/DeviceChassis';
import { SplashScreen } from './components/AppLaunch/SplashScreen';
import { ToastContainer } from './components/Common/Toast';
import { HomeScreen } from './screens/Home/HomeScreen';
import { AboutScreen } from './screens/About/AboutScreen';
import { ProjectsScreen } from './screens/Projects/ProjectsScreen';
import { ExperienceScreen } from './screens/Experience/ExperienceScreen';
import { SkillsScreen } from './screens/Skills/SkillsScreen';
import { MoreScreen } from './screens/More/MoreScreen';

const MainAppContent: React.FC = () => {
  const { activeTab, platform } = useApp();

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'about':
        return <AboutScreen />;
      case 'projects':
        return <ProjectsScreen />;
      case 'experience':
        return <ExperienceScreen />;
      case 'skills':
        return <SkillsScreen />;
      case 'more':
        return <MoreScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-[#07090e] ${
        platform === 'android' ? 'font-android' : 'font-ios'
      }`}
    >
      {/* App Launch Splash Animation */}
      <SplashScreen />

      {/* Top Device & Platform Control Bar (for Desktop exploration) */}
      <ControlBar />

      {/* Main Interactive Mobile App Frame */}
      <DeviceChassis>
        <ToastContainer />
        {renderActiveScreen()}
      </DeviceChassis>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
};

export default App;
