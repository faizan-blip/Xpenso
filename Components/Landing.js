import { Box, Button, Drawer, Fab, IconButton, Tooltip, Typography } from '@mui/material'
import React , {useContext, useState} from 'react'
import logo from '../Components/Images/black.png'
import { FcInfo , FcBinoculars} from 'react-icons/fc'
import {AiFillHome,AiOutlineLogin} from 'react-icons/ai'
import {FaQq} from 'react-icons/fa'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import {RiMenu3Line} from 'react-icons/ri'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {TbBrandSentry} from 'react-icons/tb'
import bg from '../Components/Images/bg.svg'
import bgd from '../Components/Images/bgdark.svg'
import ipad from '../Components/Images/Top iPad 9.7 Inch.png'
import pen from '../Components/Images/h8-rev-img-2.png'
import go from '../Components/Images/go.png'
import { Fade, Slide } from "react-awesome-reveal"
import DarkModeToggle from "react-dark-mode-toggle"
import { motion } from 'framer-motion'
import paddark from '../Components/Images/iPad Pro Mockup.png'
import { AppContext } from '../Context/AppContext'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {TfiClose} from 'react-icons/tfi'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
export default function Landing() {
      const [open, setOpen] = useState(false);
      const[show , setShow] = useState('')
      const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
      const {isDarkMode , setIsDarkMode} = useContext(AppContext)
      const list = [
            {icon:<AiFillHome color= {isDarkMode === false ? '#000' : "#fff"} size={20}/> , name:"Home"},
            {icon:<FcInfo size={20}/> , name:"Activities"},
            {icon:<FcBinoculars size={20}/> , name:"Features"},
            {icon:<FaQq color= {isDarkMode === false ? '#000' : "#fff"} size={20}/> , name:"Faqs"},
            {icon:<MdOutlineConnectWithoutContact color= {isDarkMode === false ? '#000' : "#fff"} size={20}/> , name:"Contact us"},
      ]
      const navLinks = {
        Home: '/#home',
        Activities: '/#activities',
        Features: '/#features',
        Faqs: '/#faqs',
        'Contact us': '/#contact',
      };
      const setbg = (name)=>{
   setShow(name)
      }
      const toggleDarkMode = () => {
        setIsDarkMode((prevdark)=> !prevdark);
      };
   const route = useRouter();
   
  return (
    <Box sx={{height:"100%" , minHeight:"100vh" ,backgroundImage:isDarkMode === false ? `url(${bg.src})` : `url(${bgd.src})`, backgroundSize:"cover" , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , position:"relative"}}>
      <Box sx={{ position:"fixed" , top:{md:"5%" , xs:"20%"} , left:{md:"2%" , xs:"75%"} , zIndex:"3" ,backdropFilter:"blur(10px)"}}>
      <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}
    />
      </Box>
    <Box sx={{display:"flex" , justifyContent:{md:"space-evenly" , xs:"space-between"} , height:"100%"  , padding:"1em 1em" , alignItems:"center"}}>
           <Image src={logo} alt=".." width={70} height={70} style={{boxShadow: isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "inset 2px 2px 8px rgba(4, 4, 5, 0.6)", width:"5em" , height:"5em" , borderRadius:"50%" , padding:"0.5em 0.5em"}} />     
           <Box sx={{width:"auto" , height:"3em" , background: isDarkMode === false ? "#dde1e7" : "#27292b" , boxShadow: isDarkMode === false ? " -3px -3px 7px #ffffff73,2px 2px 5px rgba(94, 104, 121, 0.288)" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , borderRadius:"25px" , display:{md:"flex" , xs:"none"} , alignItems:'center' , padding:"0.3em 0.5em" , gap:"0.4em"}}>
            {
              list.map((li , id)=>(
                isDarkMode ? (
                  <a style={{textDecoration:"none"}} href={navLinks[li.name]} key={id}><Button onClick={()=>setbg(li.name)} key={id} className='hoverdrk' sx={{display:"flex" , alignItems:"center" ,   color: isDarkMode === false ? '#000' : "#fff" , fontWeight:"700" , gap:"0.5em" , boxShadow:show === li.name ? ' 8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)' : 'none' , borderRadius:"12px"}}>{li.icon}{li.name}</Button></a> 
                ) : (
                  <a style={{textDecoration:"none"}} href={navLinks[li.name]} key={id}> <Button onClick={()=>setbg(li.name)} key={id} className='hover' sx={{display:"flex" , alignItems:"center" ,   color: isDarkMode === false ? '#000' : "#fff" , fontWeight:"700" , gap:"0.5em" , boxShadow:show === li.name ? 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73' : 'none' , borderRadius:"12px"}}>{li.icon}{li.name}</Button></a>
                )
             
              ))
            }
          
            </Box> 
            <Button onClick={()=>{
              route.push('/signin')
            }} className={isDarkMode === false ? "hover" : "hoverdrk"} variant='contained' sx={{background: isDarkMode === false ? "#dde1e7 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)", height:"auto" , fontSize:"18px" , borderRadius:"10px" , textTransform:"none"  , gap:"0.2em",   color: isDarkMode === false ? '#000' : "#d7e1ec",}}>Login<AiOutlineLogin olor='#000' size={20}/></Button>
            <Fab className='fab' onClick={()=>{
              route.push('/#home')
            }} sx={{display:{md:"none" , xs:"block" , position:"fixed" , bottom:"-2%" , left:"50%" , zIndex:"1!important", background: isDarkMode === false ? "#dde1e7 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)",boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , transform:"translate(-50% , -50%)"}}}><AiFillHome color='#000' size={25} style={{marginTop:"0.7em"}} /></Fab>
    </Box>
    <div id='home'></div>
    <Box sx={{display:"flex" ,padding:{sm:"4em 4em" , xs:"4em 1em"} , height:"100%" , justifyContent:"center" , gap:"3em" , flexDirection:{lg:"row" , xs:"column"}  , alignItems:{lg:"start" , xs:"center"} }}>
      <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [-5, 5, -5], 
      transition: {
        duration: 1.5,
        repeat: Infinity, 
        repeatType: "reverse", 
        ease: "easeInOut", 
      },
    }}
      >
      <Box sx={{position:"relative"  , left:{xl:"7em"  , lg:"5em" , xs:"0em"}}}>
      <Fade cascade damping={0.1}>
          <Image src={isDarkMode === false ? ipad : paddark} alt="" width={600} style={{height:"auto"}} className='pad'/>
          <Slide cascade direction='left'>
          <Image src={pen} alt="" width={300} height={300} style={{position:"absolute" , bottom:"-10%" , right:"-6%" }} className='pen'/>
          </Slide>
          </Fade>
          </Box>
          </motion.div>
          <Box sx={{display:"flex" , flexDirection:"column" , gap:"2em" , marginLeft:{xl:"7em"  , lg:"5em" , xs:"0em"} ,marginTop:{lg:"1em" , xs:"0em"}}}>
          <Fade cascade damping={0.1}>
  <Typography
    sx={{
      fontSize: { sm: "54px", xs: "40px" },
      color: isDarkMode === false ? '#000' : "#d7e1ec",
      fontWeight: "700",
      width: { xl: "80%", xs: "100%" },
      textShadow:
        "2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.2)", // Add a neumorphic text shadow
    }}
  >
    <span style={{ color: "#88d0b0" }}>Track</span>,<span style={{ color: "#4b6cb7" }}>Store</span>, and{" "}
    <span style={{ color: "#f44030", opacity: "0.7" }}>Secure</span> Your Expenses with Ease
  </Typography>
</Fade>

               <Button onClick={()=>{
                       route.push('/Coming')
               }} className={isDarkMode === false ? "hover" : "hoverdrk"} variant='contained' sx={{width:"11em" , fontWeight:"700" , fontSize:"25px" ,background: isDarkMode === false ? "#dde1e7 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#000' : "#d7e1ec" , borderRadius:"12px"}}> <span style={{color:"#f44030"}}>Ready</span>&nbsp;to Go <Image src={go} alt='go' width={40} style={{marginLeft:"0.5em"}}/></Button>
          </Box>
    </Box>
    </Box>
  )
}
