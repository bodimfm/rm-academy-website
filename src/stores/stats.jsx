import React, { createContext, useContext } from 'react'

const StatsContext = createContext({
  trained: 500,
  satisfaction: 98,
  maxPerClass: 25,
  expertiseAreas: 4
})

export const StatsProvider = ({ children }) => {
  const value = {
    trained: 500,
    satisfaction: 98,
    maxPerClass: 25,
    expertiseAreas: 4
  }
  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}

export const useStats = () => useContext(StatsContext)
