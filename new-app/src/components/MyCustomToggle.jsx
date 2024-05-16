import {Box, Button} from '@mui/material'
import React, { useState } from 'react'

function MyCustomToggle (Props) {
  const {isActive, handleToggle} = Props

  return(
    <Button onClick={() => {handleToggle()}} color={isActive ? 'primary' : 'error'} variant='contained'>
       {isActive ? 'ON' : "OFF"}
    </Button>
  )
}

export default MyCustomToggle