import {createContext, useContext, useState} from 'react';

const LoginNavigationContext = createContext();

export const NavigationProviderLogin = ({children}: any) => {
  const [loginNavigationSource, setLoginNavigationSource] = useState(null);

  return (
    <LoginNavigationContext.Provider
      value={{loginNavigationSource, setLoginNavigationSource}}>
      {children}
    </LoginNavigationContext.Provider>
  );
};

export const useLoginNavigationSource = () => useContext(LoginNavigationContext);
