import { AppContext } from "@/Context/AppContext";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AiOutlineLeft, AiOutlineLock, AiOutlineMail, AiOutlineMobile, AiOutlineUser } from "react-icons/ai";
import logo from '../Components/Images/black.png'
import Image from "next/image";
import { useRouter } from "next/router";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Sign = () => {
  const [passicon ,  setPassicon] = useState(true)
    const {isDarkMode} = useContext(AppContext)
  const [data , setData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })
    const change = ()=>{
      setPassicon((prevpass)=> !prevpass)
   }
    const route= useRouter()
     
    const signup = async(e)=>{
      e.preventDefault()
      try{
        const response = await axios.post('https://xpenso-backend.onrender.com/api/signup' , {
          name:data.name,
          email:data.email,
          phone:data.phone,
          password:data.password
        })
        console.log(response.data);
        toast.success(response.data.message)
        setTimeout(() => {
          route.push('/signin')
        }, 1000);
      } catch(err){
        console.log(err.response.data.message);
        toast.error(err.response.data.message)
      }
    } 
    return ( 
        <>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <Box sx={{ display:"flex" , justifyContent:"space-between" , padding:{sm:"0 2em" ,xs:"0 1em"} ,background:"#dde1e7", alignItems:"center"}}>
        <Image src={logo} alt=".." width={70} height={70} style={{marginTop:"1.2em",boxShadow: isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "inset 2px 2px 8px rgba(4, 4, 5, 0.6)", width:"5em" , height:"5em" , borderRadius:"50%" , padding:"0.5em 0.5em"}} />     
        <Button onClick={()=> route.push('/')} className="hover" variant="contained" sx={{marginTop:"1.2em",background:"#dde1e7 !important" ,height:"2.5em", borderRadius:"7px" , boxShadow:"2px 2px 5px #babecc,-5px -5px 10px #ffffff73" , color:"#31344b" , fontSize:"18px" , gap:"0.6em"}}> <AiOutlineLeft size={22}/>Go back home</Button>
        </Box>
        <Stack
        flexDirection='row'
        justifyContent='space-evenly'
        alignItems='center'
        bgcolor='#dde1e7'
        >
         <Box sx={{width:{xl:"50%" , lg:"60%" , sm:"80%" , xs:"90%"} , display:"flex" , flexDirection:"column", gap:"0.7em"  , alignItems:"center", padding:{sm:"0" , xs:"0 1em"}}}>
         <Typography fontSize={{sm:"35px" , xs:"27px"}} fontWeight='700' alignSelf={{sm:"center" , xs:"start"}} marginTop={{md:"0" , xs:"1.1em"}}>Create Account</Typography>
         <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1.2em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Full Name</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px"}}><AiOutlineUser size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input  onChange={(e) => setData((prevData) => ({ ...prevData, name: e.target.value }))} placeholder='e.g.Faizan Akram' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Email</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px"}}><AiOutlineMail size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input   onChange={(e) => setData((prevData) => ({ ...prevData, email: e.target.value }))} placeholder='e.g.example@gmail.com' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Phone</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px"}}><AiOutlineMobile size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input   onChange={(e) => setData((prevData) => ({ ...prevData, phone: e.target.value }))} placeholder='Phone no.' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Password</Typography>
            <Box sx={{display:"flex" , position:"relative"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px" , padding:"0"}}><AiOutlineLock size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input   onChange={(e) => setData((prevData) => ({ ...prevData, password: e.target.value }))} placeholder='Password' type={passicon ? 'text' : 'password'}  style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%" }}/>
              <IconButton onClick={change} sx={{position:"absolute"  , right:"0" , top:"0"}}>
                {
                  passicon ? (
                    <AiFillEye/>
                  ):(
       <AiFillEyeInvisible/>
                  )
                }
           </IconButton>
            </Box>
          </Box>
          <Button onClick={signup} variant='contained' sx={{width:{lg:"50%" , xs:"100%"} , fontWeight:"700" , fontSize:"20px" ,background: isDarkMode === false ? "#407bff !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#fff' : "#d7e1ec" , borderRadius:"12px" , height:"2em" , marginTop:"1em"}}>Signup</Button>
        <Typography>Already have an account? <span style={{color:"#407bff" , fontWeight:"700" , cursor:"pointer"}} onClick={()=> route.push('/signin')}>Log In</span></Typography>
         </Box>
         <Box component='img' src="/signup.png" sx={{width:"40%"  , display:{lg:"block" , xs:"none"}}}></Box>
        </Stack>
        </>
     );
}
 
export default Sign;