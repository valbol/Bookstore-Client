import { useState } from 'react'

const useExpandState = (initialState: boolean) => {
  const [expanded, setExpanded] = useState(initialState)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return {
    expanded,
    toggleExpanded
  }
}

export default useExpandState
