import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import chart from '../Components/Images/chart.png'
import notify from '../Components/Images/notify.png'
import secure from '../Components/Images/secure.png'
import { motion } from 'framer-motion'
import store from '../Components/Images/storage.png'
import ipad from '../Components/Images/about.png'
import go from '../Components/Images/go.png'
import { AppContext } from '../Context/AppContext'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
export default function About() {

  const {isDarkMode} = useContext(AppContext)
   const router = useRouter()
   const tokencr = Cookies.get("token")
  return (
    <>
    <div id='activities'></div>
    <Box sx={{display:"flex" , justifyContent:{lg:"space-evenly" , xs:"center"}  , height:"100%" , minHeight:"100vh" , background: isDarkMode === false ? "#dde1e7" : "radial-gradient(37.53% 147.33% at 5.39% 8.57%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #26282a 0%, #212325 100%)" , padding:{lg:"2em 8em" , xs:"6em 2em"} ,alignItems:"center"  , flexDirection:{lg:"row" , xs:"column-reverse"} , gap:{lg:"0" , xs:"4em"} }}>
      <Box sx={{display:"flex" , flexDirection:"column" , gap:"2em" , alignSelf:"center"}}>
      <Fade cascade damping={0.1}>
          <Typography sx={{   color: isDarkMode === false ? '#000' : "#d7e1ec" , fontWeight:"700" , fontSize:{sm:"25px" , xs:"20px"} , width:{lg:"75%" , sm:"80%" , xs:"100%"}}}>Effortlessly manage personal or company finances <br /> Join our community and start organizing your finances today! Sign up now for a hassle-free experience.</Typography>
          </Fade>
          <Button onClick={()=>{
                        if(tokencr){
                          router.push('/dashboard')
                        } else {
                          router.push('/signin')
                        }
               }}  className={isDarkMode === false ? "hover" : "hoverdrk"} variant='contained' sx={{width:"11em" , fontWeight:"700" , fontSize:"25px" ,background: isDarkMode === false ? "#dde1e7 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#000' : "#d7e1ec" , borderRadius:"12px"}}> <span style={{color:"#f44030"}}>Ready</span>&nbsp;to Go <Image src={go} alt='go' width={40} style={{marginLeft:"0.5em"}}/></Button>
          </Box>
<Box sx={{position:"relative" , marginRight:{lg:"3em" , xs:"0em"}}}>
<Image className='ipad' src={ipad} alt="" width={350} style={{position:"absolute" , transform:"translate(-50% , -50%)" , top:"50%" , left:"50%" , zIndex:"3" }}/>
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
>
          <Box sx={{width:{md:"30em" , sm:"25em" , xs:"15em"} , height:{md:"30em" , sm:"25em" , xs:"15em"}  , borderRadius:"50%" , position:"relative" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)"}}>
            <Image  className='imgie1' src={secure} alt=''  width={90} height={90}style={{boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)" , width:"7em" , height:"7em" , borderRadius:"50%" , padding:"0.2em 0.2em" , position:"absolute" , transform:"translate(-50% , -50%)" , top:"20%" , left:"10%"}}/>
            <Image className='imgie2' src={chart} alt=''  width={90} height={90}style={{boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73"  : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", width:"7em" , height:"7em" , borderRadius:"50%" , padding:"0.2em 0.2em" , position:"absolute" , transform:"translate(-50% , -50%)" , top:"20%" , right:"-15%"}}/>
            <Image className='imgie3' src={notify} alt='' width={90} height={90} style={{boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)" , width:"7em" , height:"7em" , borderRadius:"50%" , padding:"0.2em 0.2em" , position:"absolute" , transform:"translate(-50% , -50%)" , bottom:"-5%" , left:"10%"}}/>
            <Image className='imgie4' src={store} alt=''  width={90} height={90}style={{boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)" , width:"7em" , height:"7em" , borderRadius:"50%" , padding:"0.2em 0.2em" , position:"absolute" , transform:"translate(-50% , -50%)" , bottom:"-5%" , right:"-15%"}}/>
          </Box>
          </motion.div>
          </Box>
    </Box>
    </>
  )
}
