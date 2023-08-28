import { Stack, Button, Typography , Box } from "@mui/material";
import { useRouter } from "next/router";
import {AiOutlineLeft} from 'react-icons/ai'
const ERROR = () => {
  const router = useRouter();


  return (
    <>
      <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={{ background:"#dde1e7", height: "100vh" }}>
        {/* Space Alien SVG */}
        <Box sx={{ background:"#dde1e7" , width:"50%" ,minWidth:"300px", boxShadow:"inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" ,  padding:{sm:"1.2em 1.2em" , xs:"0.7em 0.7em"} , borderRadius:"17px"}}>
            <Box sx={{display:"flex" , flexDirection:"column"  , background:"#dde1e7" , width:"auto" , boxShadow:"2px 2px 5px #babecc,-5px -5px 10px #ffffff73" ,  padding:{md:"2em 3em"  , xs:"1em 0.5em"}  , borderRadius:"17px" , justifyContent:"center" , alignItems:"center"}}>
       <Box className="pad" component='img' src='/404.png' sx={{width:"300px" ,  mixBlendMode:"multiply" , height:"auto",  filter: "drop-shadow(2px 2px 5px #babecc,-5px -5px 10px #ffffff73)"}}/>
         <Box sx={{marginTop:"0em" , display:"flex" , flexDirection:"column" , gap:"1.1em" , justifyContent:"center" , alignItems:"center"}}> 
                  <Typography sx={{color:"#31344b" , fontSize:"calc(1.375rem + 1.5vw)"}}>Page not <span style={{fontWeight:"700"}}> Found</span> </Typography>
                  <Typography sx={{textAlign:"center" , fontSize:"16px" , width:{sm:"70%" , xs:"100%"} }}>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.</Typography>
         <Button onClick={()=> router.push('/')} className="hover" variant="contained" sx={{background:"#dde1e7 !important" , borderRadius:"7px" , boxShadow:"2px 2px 5px #babecc,-5px -5px 10px #ffffff73" , color:"#31344b" , fontSize:"18px" , gap:"0.6em"}}> <AiOutlineLeft size={22}/>Go back home</Button>
         </Box>
        </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ERROR;
