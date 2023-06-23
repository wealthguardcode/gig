// From https://github.com/uidotdev/usehooks/blob/main/index.js

import { useCallback, useEffect, useState } from 'react'

export function useWindowScroll() {
  const [state, setState] = useState({
    x: null,
    y: null,
  })

  const scrollTo = useCallback((...args) => {
    if (typeof args[0] === 'object') {
      window.scrollTo(args[0])
    } else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      window.scrollTo(args[0], args[1])
    } else {
      throw new Error(
        `Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setState({ x: window.pageXOffset, y: window.pageYOffset })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [state, scrollTo]
}
