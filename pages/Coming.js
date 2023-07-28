import { Box } from '@mui/material'
import React from 'react'
import cs from '../Components/Images/coming.jpg'
export default function Coming() {
  return (
    <Box sx={{display:"flex" , height:"100%" , minHeight:"100vh" , backgroundImage:`url(${cs.src})` , backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat:"no-repeat"}}>
    </Box>
  )
}
