'use client'

import { useState, useEffect } from 'react'

const useClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

export { useClient }
