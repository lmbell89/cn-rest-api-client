import React, { useEffect, useRef } from 'react'
import { CircularProgress } from '@material-ui/core'

import useOnScreen from '../utils/useOnScreen'

const HomeLoader = ({ refresh }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible) {
      refresh()
    }
  })

  return <div ref={ref}><CircularProgress /></div>
}

export default HomeLoader