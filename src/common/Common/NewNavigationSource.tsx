import {createContext, useContext, useState} from 'react';

const NewNavigationContext = createContext();

export const NavigationProviderNew = ({children}: any) => {
  const [newNavigationSource, setNewNavigationSource] = useState(null);

  return (
    <NewNavigationContext.Provider
      value={{newNavigationSource, setNewNavigationSource}}>
      {children}
    </NewNavigationContext.Provider>
  );
};

export const useNewNavigationSource = () => useContext(NewNavigationContext);
