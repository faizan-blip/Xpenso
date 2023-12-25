import { Box, Button, Paper, Stack, TextField, Typography,Divider,Chip, IconButton } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/Context/AppContext";
import {AiFillEye,AiFillEyeInvisible, AiOutlineLock} from 'react-icons/ai'
import toast, { Toaster } from "react-hot-toast";
const change = () => {
  const router = useRouter()
    const [password , setPassword] = useState('')
    const [newpassword , setNewpassword] = useState('')
    const [passicon, setPassicon] = useState(true);
    const [passicon1, setPassicon1] = useState(true);
    const forgotpass = async()=>{
      const pathParts = window.location.pathname.split('/');
      const id = pathParts[pathParts.length - 2];
      const token = pathParts.pop();
      
      console.log(id, token);
        try{
        const res = await axios.post(`http://localhost:4000/api/resetpassword/${id}/${token}` ,{
          password:password,
          confirmPassword:newpassword 
        } , {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        
        console.log(res.data.message);
        toast.success(res.data.message)
        setTimeout(() => {
          router.push('/signin')
        }, 1000);
      }catch(error){
        toast.error(error.response.data.message)
        console.log(error.response.data.message);
      }
    }
    const { isDarkMode } = useContext(AppContext);
    const change = () => {
        setPassicon((prevpass) => !prevpass);
      };
      const change1 = () => {
        setPassicon1((prevpass) => !prevpass);
      };
    
    return ( 
        <>
        <Toaster/>
        <Stack
        flexDirection='row'
        justifyContent='center'
        alignItems='center'
        bgcolor='#dde1e7'
        padding='1.5em 1.5em'
        minHeight='100vh'
        >
         <Box sx={{width:{xl:"40%" , lg:"60%" , sm:"80%" , xs:"90%"} , display:"flex" , flexDirection:"column", gap:"0.7em"  , alignItems:"center", padding:{sm:"0" , xs:"0 1em"}}}>
         <Typography fontSize={{sm:"35px" , xs:"27px"}} fontWeight='700' alignSelf={{sm:"center" , xs:"center"}} marginTop={{md:"0" , xs:"1.1em"}}>change Password</Typography>
          <Typography textAlign='center' padding='0 0.5em' fontSize={{sm:"18px" , xs:"14px"}} >Password must contain at least 1 letter , 1 number , and 1 symbol . Minimum length is 12 characters.</Typography>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>New Password</Typography>
            <Box sx={{display:"flex", position:"relative"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px" , padding:"0"}}><AiOutlineLock size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input onChange={(e)=> setPassword(e.target.value)} placeholder='Password' type={passicon ? 'text' : 'password'}  style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%" }}/>
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

          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Confirm New Password</Typography>
            <Box sx={{display:"flex", position:"relative"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px" , padding:"0"}}><AiOutlineLock size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input onChange={(e)=> setNewpassword(e.target.value)} placeholder='Password' type={passicon1 ? 'text' : 'password'}  style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%" }}/>
              <IconButton onClick={change1} sx={{position:"absolute"  , right:"0" , top:"0"}}>
                {
                  passicon1 ? (
                    <AiFillEye/>
                  ):(
       <AiFillEyeInvisible/>
                  )
                }
           </IconButton>
            </Box>
          </Box>
        
      {/* <Button onClick={async() => await signIn('google')} variant='contained' sx={{width:{lg:"50%" , xs:"100%"} , fontWeight:"700", textTransform:"none" , fontSize:"19px" ,background: isDarkMode === false ? "#000 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#fff' : "#d7e1ec" , borderRadius:"12px" , height:"2.5em" , marginTop:"1em" , gap:"1em"}}>  <Box component='img' src="/google.png" sx={{width:"7%" }}></Box>Sign in with Google</Button> */}
          <Button  onClick={forgotpass}variant='contained' sx={{width:{lg:"50%" , xs:"100%"} , fontWeight:"700" , fontSize:"19px",textTransform:"none" ,background: isDarkMode === false ? "#407bff !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#fff' : "#d7e1ec" , borderRadius:"12px" , height:"2.5em" , marginTop:"0.4em"}}>Reset Password</Button>
         </Box>
         <Box component='img' src="/for.png" sx={{width:"30%"  , display:{lg:"block" , xs:"none"}}}></Box>
        </Stack>
        </>
     );
}
 
export default change;