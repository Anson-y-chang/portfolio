import { createContext, useContext, useState } from "react";

const RecordsContext = createContext()
export const useRecordsContext = () => {
  return useContext(RecordsContext)
} 


export const RecordsContextProvider = ( {children} ) => {
  const [records, setRecords] = useState([])
  const [options, setOptions] = useState(["餐飲", "日用", "水電", "交通"])

  return  <RecordsContext.Provider value={{records, setRecords, options, setOptions}}>
            {children} 
          </RecordsContext.Provider>
}