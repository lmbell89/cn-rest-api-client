import React, { useEffect, useRef } from 'react'

import useOnScreen from '../utils/useOnScreen'

const HomeLoader = ({ page, refresh }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible) {
      refresh()
    }
  })

  return <div ref={ref}></div>
}

export default HomeLoader