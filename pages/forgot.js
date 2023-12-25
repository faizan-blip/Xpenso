import { Box, Button, Paper, Stack, TextField, Typography,Divider,Chip } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "@/Context/AppContext";
import { AiOutlineMail } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
const forgot = () => {
  const router = useRouter();
    const {token} = router.query;
    const [email , setEmail] = useState('')
    const forgotpass = async()=>{
        try{
        const res = await axios.post(`http://localhost:4000/api/forgotpassword/${token}` ,{
          email:email 
        } , {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data.data.link);
        toast.success(res.data.message)
      }catch(error){
        toast.error(error.response.data.message)
        console.log(error.response.data.message);
      }
    }
    const { isDarkMode } = useContext(AppContext);
    return ( 
        <>
        <Toaster/>
        <Stack
        flexDirection='column-reverse'
        justifyContent='center'
        alignItems='center'
        bgcolor='#dde1e7'
        padding='1.5em 1.5em'
        minHeight='100vh'
        >
         <Box sx={{width:{xl:"40%" , lg:"60%" , sm:"80%" , xs:"90%"} , display:"flex" , flexDirection:"column", gap:"0.7em"  , alignItems:"center", padding:{sm:"0" , xs:"0 1em"}}}>
         <Typography fontSize={{sm:"35px" , xs:"27px"}} fontWeight='700' alignSelf={{sm:"center" , xs:"center"}} marginTop={{md:"0" , xs:"1.1em"}}>Reset Password</Typography>
          <Typography textAlign='center' padding='0 0.5em' fontSize={{sm:"18px" , xs:"14px"}} >Please enter your email address below, and we'll send you instructions for setting up a new password.</Typography>
          <Box sx={{display:"flex" , flexDirection:"column" , marginTop:"1em" , gap:"0.5em" , width:{lg:"50%" , xs:"100%"}}}>
            <Typography sx={{  color: isDarkMode === false ? '#000' : "#fff"}}>Your Email</Typography>
            <Box sx={{display:"flex"}}>
              <Button sx={{boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)" , background: isDarkMode === false ? "#dde1e7" : " linear-gradient(135deg, #3A3E41 0%, #2A2D30 49%, #242628 100%), linear-gradient(139deg, #434B54 1%, #2A2C2F 45%, #191B1E 75%)" , borderRadius:"15px 0 0 15px"}}><AiOutlineMail size={20}  color={isDarkMode === false ? '#000' : "#d7e1ec"} /></Button>
              <input onChange={(e)=> setEmail(e.target.value)} placeholder='e.g.example@gmail.com' type='text' style={{  color: isDarkMode === false ? '#000' : "#d7e1ec",boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)", border:"none" , height:"2.5em" , width:"100%"}}/>
            </Box>
          </Box>
        
      {/* <Button onClick={async() => await signIn('google')} variant='contained' sx={{width:{lg:"50%" , xs:"100%"} , fontWeight:"700", textTransform:"none" , fontSize:"19px" ,background: isDarkMode === false ? "#000 !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#fff' : "#d7e1ec" , borderRadius:"12px" , height:"2.5em" , marginTop:"1em" , gap:"1em"}}>  <Box component='img' src="/google.png" sx={{width:"7%" }}></Box>Sign in with Google</Button> */}
          <Button  onClick={forgotpass}variant='contained' sx={{width:{lg:"50%" , xs:"100%"} , fontWeight:"700" , fontSize:"19px",textTransform:"none" ,background: isDarkMode === false ? "#407bff !important" : "linear-gradient(166deg, transparent 0% 50%, #2D3135 50%, #3E4248 100%), linear-gradient(166deg, #3E4248 0%, #2A2E32 50%, #3E4248 50%, #313437 100%) !important" , boxShadow: isDarkMode === false ? "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" : "8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08)" , cursor:"pointer", color: isDarkMode === false ? '#fff' : "#d7e1ec" , borderRadius:"12px" , height:"2.5em" , marginTop:"0.4em"}}>Send Email</Button>
         </Box>
         <Box component='img' src="/for.png" sx={{width:"30%"  , display:{lg:"block" , xs:"none"}}}></Box>
        </Stack>
        </>
     );
}
 
export default forgot;