import React, { useState, createContext } from 'react'
import useApi from './containers/useApi'

export const StoreContext = createContext(null)

export default ({ children }) => {

  // const [user, setUser] = useState({ firstName: 'Georges' })
  const getUsers = useApi()
  // const user = { firstName: 'Georges' }

  const user = getUsers()

  const store = {
    user,
  };

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}