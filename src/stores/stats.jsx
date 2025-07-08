import React, { createContext, useContext } from 'react'

export const StatsContext = createContext({})

export function StatsProvider({ children }) {
  const value = {
    professionalsTrained: 500,
    satisfactionRate: 98,
    maxClassSize: 25,
    expertiseAreas: 4
  }

  return (
    <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
  )
}

export function useStats() {
  return useContext(StatsContext)
}
