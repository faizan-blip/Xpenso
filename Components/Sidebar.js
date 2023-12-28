import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from '../Components/Images/black.png'
import bg1 from '../Components/Images/Waves-2s-1536px.png'
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AiOutlineLogout } from "react-icons/ai";
const Sidebar = () => {
    const router = useRouter()
   const user = Cookies.get('user')
    return (  
        <>
        <Stack height='auto' display={{md:"flex" , xs:"none"}} flexDirection='column' alignItems='center' width='15%' margin='1.2em 1.2em' padding='1.5em 1.5em' borderRadius='9px' sx={{background:`url(${bg1.src})`, backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" }} boxShadow="8px 8px 22px rgba(21, 22, 24, 0.38), -4px -2px 16px rgba(195, 200, 205, 0.08), inset -2px -2px 4px rgba(54, 54, 57, 0.16), inset 2px 2px 4px rgba(30, 30, 32, 0.18)" >
        <Image onClick={()=> router.push('/')} src={logo} alt=".." width={70} height={70} style={{boxShadow: "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73", width:"6em" , height:"6em" , borderRadius:"50%" , padding:"0.5em 0.5em"}} />     
        <Button variant='contained' sx={{borderRadius:"7px" , background:"#252525 !important" , marginTop:"2em" , fontWeight:"700" , fontSize:"19px" , width:"100%"}}>Dashboard</Button>
        <Stack marginTop='2.8em' bgcolor='' boxShadow='inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73' width='100%' height='auto' flexDirection='column' alignItems='center' padding='1.5em 0.5em' borderRadius='12px'>
         <Box component='img' src="./detais.png" sx={{width:"200px"}}/>
         <Typography fontSize='14px' fontWeight='700' textAlign='center'>To alleviate the pressure of money handling, we've created an expense tracker. Click the button below to learn more.</Typography>
         <Button onClick={()=> router.push('/')} variant='contained' sx={{borderRadius:"7px" , background:"#407bff !important" ,fontWeight:"700" , marginTop:"0.7em"}}>Know More</Button>
        </Stack>
         {
              user && (
                <Button onClick={()=>{
                  Cookies.remove("user")
                  router.push('/signin')
                }} className="hover" variant='contained' sx={{ marginTop:"1.5em",width:"100%",background:"none !important" , boxShadow: "2px 2px 5px #babecc,-5px -5px 10px #ffffff73", height:"auto" , fontSize:"18px" , borderRadius:"10px" , textTransform:"none"  , gap:"0.2em",   color:'#000'}}>Log-out<AiOutlineLogout color='#000' size={20}/></Button>
              )
            }
        </Stack>
        </>
    );
}
 
export default Sidebar;