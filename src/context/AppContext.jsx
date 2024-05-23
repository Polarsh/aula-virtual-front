import { createContext, useContext, useState } from 'react'

import coursesJson from '../json/courses.json'

export const appContext = createContext()

export const useApp = () => {
  const context = useContext(appContext)
  return context
}

export function AppProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <appContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        darkMode,
        setDarkMode,
        loading,
        setLoading,
        coursesList: coursesJson.coursesList,
      }}>
      {children}
    </appContext.Provider>
  )
}
