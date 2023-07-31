import { Stack, Button, Typography , Box , IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineGithub , AiOutlineLinkedin , AiOutlineInstagram ,AiOutlineLeft } from 'react-icons/ai'
const ERROR = () => {
  const router = useRouter();

  const social = [
    {icon:<AiOutlineGithub color="#31344b" /> , title:"Github"},
    {icon:<AiOutlineLinkedin color="#31344b"/> , title:"Linkedin"},
    {icon:<AiOutlineInstagram color="#31344b"/> , title:"Instagram"},
]
  return (
    <>
      <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={{ background:"#dde1e7", height: "100vh" }}>
        {/* Space Alien SVG */}
        <Box sx={{ background:"#dde1e7" , width:"50%" ,minWidth:"300px", boxShadow:"inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" , height:"auto" , padding:{sm:"1.2em 1.2em" , xs:"0.7em 0.7em"} , borderRadius:"17px"}}>
            <Box sx={{display:"flex" , flexDirection:"column"  , background:"#dde1e7" , width:"auto" , boxShadow:"2px 2px 5px #babecc,-5px -5px 10px #ffffff73" , height:"auto" , padding:{md:"2em 3em"  , xs:"1em 0.5em"} , borderRadius:"17px" , justifyContent:"center" , alignItems:"center"}}>

         <Box sx={{ display:"flex" , flexDirection:"column" , gap:"1.1em" , justifyContent:"center" , alignItems:"center"}}> 
                  <Typography sx={{color:"#31344b" , fontSize:"calc(1.375rem + 1.5vw)"}}>We're coming <span style={{fontWeight:"700"}}> soon.</span> </Typography>
                  <Stack flexDirection='row' gap='0.7em' marginTop='0.5em'>
            {
              social.map((socio , id)=>(
                <Box key={id} className="hover" sx={{ boxShadow: "2px 2px 5px #babecc,-5px -5px 10px #ffffff73" , background:"#dde1e7",width:"3em" , height:"3em" , borderRadius:"50%" , display:"flex" , justifyContent:"center" , alignItems:"center" }}>
                      <IconButton >{socio.icon}</IconButton>
                </Box>
              ))
            }
           </Stack>
           <Typography sx={{width:{sm:"70%" , xs:"100%"} , textAlign:"center"}}>Our website is under construction.
We'll launch our awesome website in: <Link style={{color:"#4f46e5"}} href='https://x-penso.vercel.app/'>x-penso.vercel.app</Link> </Typography>
         <Button onClick={()=> router.push('/')} className="hover" variant="contained" sx={{background:"#dde1e7 !important" , borderRadius:"7px" , boxShadow:"2px 2px 5px #babecc,-5px -5px 10px #ffffff73" , color:"#31344b" , fontSize:"18px" , gap:"0.6em"}}> <AiOutlineLeft size={22}/>Go back home</Button>
         </Box>
        </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ERROR;
