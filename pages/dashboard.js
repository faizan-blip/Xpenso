import Cards from "@/Components/Cards";
import Sidebar from "@/Components/Sidebar";
import Chart from "@/Components/Chart";
import { Avatar, Stack, Typography, Button, IconButton, Fab } from "@mui/material"; // Added Button import
import Table from "@/Components/Table";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import bg1 from '../Components/Images/Waves-2s-1536px.png'
import Cookies from "js-cookie";
import { AiOutlineLogout } from "react-icons/ai";
import { AppContext } from "@/Context/AppContext";
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { signOut, useSession } from "next-auth/react";
import logo from '../Components/Images/black.png'
import Image from "next/image";
const Dashboard = () => {
  const router = useRouter();
  const {isDarkMode , setIsDarkMode} = useContext(AppContext)
  let email = Cookies.get('email')
  console.log(email);
  const { accessemail , accesstoken} = router.query;
  Cookies.set("accessemail" , accessemail)
  useEffect(() => {
    const { accesstoken , accessemail} = router.query;
    console.log(accesstoken);
    let tokencr = Cookies.get("token"); // Declare tokencr using let
    console.log(tokencr);
  
    if (accesstoken == '' && tokencr == '') {
      router.push('/signin');
    }
  }, [router]);
  

  return (
    <>
      <Stack flexDirection='row' justifyContent='center' bgcolor='#dde1e7' minHeight='100vh' sx={{backgroundImage:`url(${bg1.src})`,backgroundRepeat: "no-repeat",backgroundSize: "cover" }} >
        <Sidebar/>
        <Stack flexDirection='column' margin={{sm:"1.5em 1em" , xs:"1em 0em"}} width={{sm:"85%" , xs:"auto"}} justifyContent='center' alignItems='center'>
          <Stack width='100%' flexDirection='row' justifyContent='space-between' margin={{sm:"0" , xs:"0 1em"}}>
          <Stack flexDirection='column' alignItems='start' >
          <Image className="logo" onClick={()=> router.push(`/?accesstoken=${accesstoken}&accessemail=${accessemail}`)} src={logo} alt=".." width={50} height={50} style={{boxShadow: "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73", width:"4em" , height:"4em" , borderRadius:"50%" , padding:"0.5em 0.5em"  , display:"none"}} />     
          <Typography fontSize='25px' fontWeight='700' color='#252525'>Dashboard</Typography>
              <Typography fontSize={{sm:"15px" , xs:"12px"}}>Logged-in as {email == undefined ? accessemail : email}</Typography>
            </Stack>
            <Stack display={{md:"none" , xs:"block"}}>
            <Fab onClick={async()=>{
                Cookies.remove("token")
                Cookies.remove('email')
  await signOut({ callbackUrl: "https://x-penso.vercel.app/signin", });
                
                  // router.push('/signin')
                 
                }}sx={{background:"none !important" , display:"flex" , justifyContent:"center"  , alignItems:"center" }}><AiOutlineLogout color='#000' size={20}/></Fab>
                </Stack>
          </Stack>
          <Typography sx={{alignSelf:"end" , margin:"0.5em 0" , fontSize:"14px" , fontWeight:"400", display:"flex" , alignItems:"center"}}><IconButton onClick={()=> router.reload()}><RefreshIcon/></IconButton>Refresh to see the update..</Typography>
          <Stack flexDirection='row' justifyContent='center' alignItems='center' height='100%' margin='1.8em 0' width='100%'>
          <Cards/>
          </Stack>
          <Stack flexDirection={{lg:"row" , xs:"column"}} gap='1.5em' alignItems='center'  margin='1em 0' width='100%'>
            <Table/>
            <Chart/>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
