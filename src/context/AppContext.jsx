import { createContext, useContext, useState } from 'react'

export const appContext = createContext()

export const useApp = () => {
  const context = useContext(appContext)
  return context
}

export function AppProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <appContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        loading,
        setLoading,
      }}>
      {children}
    </appContext.Provider>
  )
}
