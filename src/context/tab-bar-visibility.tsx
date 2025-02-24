import { createContext, useContext, useState } from 'react';

const TabBarVisibilityContext = createContext({
  isTabBarVisible: true,
  setTabBarVisible: (visible: boolean) => {},
});

export function TabBarVisibilityProvider({ children }: { children: React.ReactNode }) {
  const [isTabBarVisible, setTabBarVisible] = useState(true);

  return (
    <TabBarVisibilityContext.Provider value={{ isTabBarVisible, setTabBarVisible }}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
}

export function useTabBarVisibility() {
  return useContext(TabBarVisibilityContext);
}
