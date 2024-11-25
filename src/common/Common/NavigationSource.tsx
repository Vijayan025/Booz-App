import {createContext, useContext, useState} from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({children}: any) => {
  const [navigationSource, setNavigationSource] = useState(null);

  return (
    <NavigationContext.Provider value={{navigationSource, setNavigationSource}}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationSource = () => useContext(NavigationContext);
