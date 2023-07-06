import { createContext, useState, useContext } from "react";


const SearchContext = createContext({})
export const useSearchContext = () => {
  return useContext(SearchContext)
}

export const SearchContextProvider = ( {children} ) => {
  const [localSearchParams, setLocalSearchParams] = useState('')
  return  <SearchContext.Provider value={{localSearchParams, setLocalSearchParams}}>
            {children} 
          </SearchContext.Provider>
}