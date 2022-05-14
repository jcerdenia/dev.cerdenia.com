import { createContext, useState } from "react";

interface SearchState {
  query: string;
  results: any[];
}

export const AppStateContext = createContext({} as any);

const AppStateProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<string | null>(null);
  const [searchState, setSearchState] = useState<SearchState>({
    query: "",
    results: [],
  });

  return (
    <AppStateContext.Provider
      value={{ theme, setTheme, searchState, setSearchState }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
