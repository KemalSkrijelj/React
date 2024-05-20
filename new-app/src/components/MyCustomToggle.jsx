import {Box, Button} from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import React, { useState } from 'react'
import { arrColors, arrColors2, randomColor } from '../utils'

function MyCustomToggle (Props) {
  const {isActive, handleToggle} = Props

  const [currentColor, setCurrentColor] = useState('primary')

  const handleRandomColor = () => {
    setCurrentColor(randomColor(arrColors,currentColor))
  }

  return(
    <Button onClick={() => {handleRandomColor()}} color={currentColor} variant='contained'>
       {isActive ? 'ON' : "OFF"}
    </Button>
  )
}

export default MyCustomToggle