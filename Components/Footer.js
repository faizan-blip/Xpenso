import { Stack , Box, Typography, IconButton, Tooltip, Divider, Button } from '@mui/material'
import React, { useContext , useState } from 'react'
import { AppContext } from '../Context/AppContext'
import {SiLinktree} from 'react-icons/si'
import {AiOutlineGithub , AiOutlineLinkedin , AiOutlineInstagram, AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import { FcInfo , FcBinoculars} from 'react-icons/fc'
import {AiFillHome} from 'react-icons/ai'
import {FaQq} from 'react-icons/fa'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import logo from '../Components/Images/black.png'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Cookies from 'js-cookie'
export default function Footer() {
   const [data , setData]= useState({
    name:"",
    email:"",
    message:""
   })
    const {isDarkMode} = useContext(AppContext)
    const[show , setShow] = useState('')
    const social = [
        {icon:<AiOutlineGithub color={isDarkMode === false ? '#000' : "#d7e1ec"} /> , title:"Github"},
        {icon:<AiOutlineLinkedin color={isDarkMode === false ? '#000' : "#d7e1ec"}/> , title:"Linkedin"},
        {icon:<AiOutlineInstagram color={isDarkMode === false ? '#000' : "#d7e1ec"}/> , title:"Instagram"},
    ]
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

     const sendmessage = async()=>{
      const tokencr = Cookies.get("token")
      try{
        const res = await axios.post('https://xpenso-backend.onrender.com/api/sendmessage'  , {
          name:data.name,
          email:data.email,
          message:data.message
         } , {
            headers:{
              Authorization:`Bearer ${tokencr}`
            }
         })
         console.log(res.data.message);
        toast.success(res.data.message)
      } catch(err){
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
      }
       
     }
  
  return (
    <>
    <Toaster/>
    <div id='contact'></div>
    <Stack flexDirection={{lg:"row" , xs:"column"}} justifyContent='space-between' alignItems='start' sx={{ background: isDarkMode === false ? "#dde1e7" : "radial-gradient(37.53% 147.33% at 5.39% 8.57%, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #26282a 0%, #212325 100%)" , height:"100%" , boxShadow:isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , padding:{lg:"2em 8em" , xs:"2em 2em"} , gap:"1em" , flexWrap:"nowrap" }}>
        <Box sx={{display:"flex" , flexDirection:"column"  , width:{lg:"28%" , xs:"100%"} , gap:"0.8em"}}> 
           <Typography sx={{color: isDarkMode === false ? '#000' : "#d7e1ec" , fontWeight:"700" , fontSize:"22px"}}>Xpenso <span style={{opacity:"0.7", fontWeight:"500" , fontSize:"16px"}}>Track,Store, and Secure Your Expenses with Ease</span></Typography>
           <Stack flexDirection='row' gap='0.7em' marginTop='0.5em'>
            {
              social.map((socio , id)=>(
                <Box key={id} className={isDarkMode === false ? "hover" : "hoverdrk"} sx={{ boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" ,width:"3em" , height:"3em" , borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center" }}>
                      <Tooltip placement='top' title={socio.title}>
                      <IconButton >{socio.icon}</IconButton>
                      </Tooltip>
                </Box>
              ))
            }
           </Stack>
        <Typography sx={{fontSize:"14px" , marginTop:"0.5em",color: isDarkMode === false ? '#000' : "#d7e1ec"}}>Copyright © Xpenso 2023. All rights reserved.</Typography>
        </Box>
        <Box sx={{display:"flex" , flexDirection:"column" }}>
        <Typography sx={{fontWeight:"700" ,fontSize:"22px" , color: isDarkMode === false ? '#000' : "#d7e1ec"}}>Nav-Links</Typography>
        <Divider sx={{width:"5em" , borderColor:"#78c5d6" , height:"0.5em" , borderRadius:"15px" , borderBottomWidth:"3px"}}/>
        <Box sx={{display:"flex" , flexDirection:{lg:"column" , xs:"row"} , marginTop:"1em" , gap:"0.5em" , alignItems:"start", width:"100%" , flexWrap:{sm:"nowrap" , xs:"wrap"}}}>
          {
            list.map((li , id)=>(
              isDarkMode ? (
                <a style={{textDecoration:"none"}} href={navLinks[li.name]} key={id}><Button onClick={()=>setbg(li.name)} key={id} className='hoverdrk' sx={{display:"flex" ,   color: isDarkMode === false ? '#000' : "#fff" , fontWeight:"700" , gap:"0.5em" , boxShadow:show === li.name ? ' 8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)' : 'none' , borderRadius:"12px"}}>{li.name}</Button></a> 
              ) : (
                <a style={{textDecoration:"none"}} href={navLinks[li.name]} key={id}> <Button onClick={()=>setbg(li.name)} key={id} className='hover' sx={{display:"flex" ,   color: isDarkMode === false ? '#000' : "#fff" , fontWeight:"700" , gap:"0.5em" , boxShadow:show === li.name ? 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73' : 'none' , borderRadius:"12px"}}>{li.name}</Button></a>
              )
           
            ))
          }
          </Box>
        </Box>
        <Box sx={{display:"flex" , flexDirection:"column" , width:{lg:"auto" , xs:"100%"}}}>
          <Typography sx={{fontWeight:"700" ,fontSize:"22px",  color: isDarkMode === false ? '#000' : "#d7e1ec"}}>Contact-us</Typography>
          <Divider sx={{width:"5em" , borderColor:"#78c5d6" , height:"0.5em" , borderRadius:"15px" , borderBottomWidth:"3px"}}/>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em"}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Name</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px"}}><AiOutlineUser size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))}  placeholder='e.g.Faizan Akram' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em"}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Email</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)", borderRadius:"15px 0 0 15px"}}><AiOutlineMail size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))}  placeholder='e.g.faizanrock753@gmail.com' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em"}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Message</Typography>
            <Box sx={{display:"flex"}}>
              <textarea onChange={(e) => setData((prevData) => ({ ...prevData, message: e.target.value }))}  rows={5} placeholder='Type your message.....'  style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"10em" , width:"100%" , resize:"none" , background:"none"}}/>
            </Box>
          </Box>
          <Button onClick={sendmessage} className={isDarkMode === false ? "hover" : "hoverdrk"} variant='contained' sx={{background: isDarkMode === false ? "#dde1e7 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)", height:"auto" , fontSize:"18px" , borderRadius:"10px" , textTransform:"none"  , gap:"0.2em" ,    color: isDarkMode === false ? '#000' : "#d7e1ec" , marginTop:"1em" }}>Submit</Button>
        </Box>
    </Stack>
    </>
  )
}
