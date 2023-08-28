import Signin from "@/Admin/Signin";
import { Box } from "@mui/material";

const sign = () => {
    return ( 
        <>
        <Box sx={{minHeight:"100vh" , background:"#dde1e7"}}>
        <Signin/>
        </Box>
        </>
     );
}
 
export default sign;