import { Box, Divider, Typography } from '@mui/material';
import React, { useContext } from 'react'
import bg1 from '../Components/Images/Waves-2s-1536px.png'
import { AppContext } from '../Context/AppContext';
import bgwave from '../Components/Images/bgwave.png'
import fea from '../Components/Images/fea.png'
import chart from '../Components/Images/chart.png'
import notify from '../Components/Images/notify.png'
import secure from '../Components/Images/secure.png'
import store from '../Components/Images/storage.png'
import Image from 'next/image';
const data = [
  {name:"‌Reliable authentication",details:"Multi-factor authentication keeps your account secure" , icon:secure},
  {name:"Efficient expense tracking",details:"Whether it's daily purchases, monthly bills, or occasional splurges, you can input and organize your expenses with ease" , icon:chart},
  {name:"Budgeting tools",details:"Set budget limits, receive spending alerts, and generate detailed expense reports to make informed financial decisions" , icon:notify},
  {name:"Secure data storage",details:"Our secure storage feature allows you to conveniently upload, store, and retrieve your financial documents whenever you need them" , icon:store},
]

export default function Feature() {
  const {isDarkMode} = useContext(AppContext)
  return (
    <>
    <div id='features'></div>
    <Box sx={{height:"100%" , backgroundImage: isDarkMode === false ? `url(${bg1.src})`:  `url(${bgwave.src})` , display:"flex" , justifyContent:"space-around" , backgroundPosition:"center" , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , alignItems:"center" , padding:"3em 1em" , flexDirection:{md:"row" , xs:"column" }}} className='bg1'>
     <Image className='fea' src={fea} alt="" width={400} />
     <Box sx={{display:"flex" , flexDirection:"column" , width:{md:"50%" , xs:"80%"} }}>
          <Box sx={{display:"flex" , gap:"1.5em" , alignItems:"center" , flexDirection:{sm:"row" , xs:"column" }}}>
          <Typography sx={{   color: isDarkMode === false ? '#000' : "#d7e1ec", fontWeight:"700" , fontSize:"20px"}}>Features</Typography>
          <Divider orientation='vertical' flexItem sx={{boxShadow:"inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" }}/>
          <Typography sx={{color: isDarkMode === false ? '#000' : "#d7e1ec" , opacity:"0.5"}}>Discover the ultimate expense tracker designed to streamline your finances effortlessly. Easily track, budget, and secure expenses for both personal and business needs. Gain valuable insights with detailed reports and analytics. Join now and experience simplified financial management!</Typography>
          </Box>
          <Box sx={{display:"flex" , justifyContent:"start" , alignItems:"center" , gap:"1em" , width:"100%" , overflowX:"scroll" }} className={isDarkMode === false ? 'scrolllight' : 'scroll'}>
            {
              data.map((dat , index)=>(
<Box className='anime' key={index} sx={{ minWidth:{sm:"250px" , xs:"210px"}, minHeight:"16.5em",  height:"100%" , background:isDarkMode === false ? "  #dde1e7" : "#27292b"  , boxShadow:isDarkMode === false ? '2px 2px 5px #babecc,-5px -5px 10px #ffffff73' : '15px 25px 15px rgba(21, 22, 24, 0.24), -4px -4px 15px rgba(195, 200, 205, 0.04)' , borderRadius:"15px" , margin:"3em 0.3em" , padding:{sm:"1.5em 1.5em" , xs:"1em 1em"} , display:"flex" , flexDirection:"column" , gap:"1em"}}> 
    <Image src={dat.icon} width={50} alt="icon" style={{borderRadius:"15px" , padding:"0.5em 0.5em" , boxShadow:isDarkMode === false ? "inset 2px 2px 5px #babecc,inset -5px -5px 10px #ffffff73" : "inset -2px -2px 2px rgba(83, 86, 102, 0.14), inset 2px 2px 5px rgba(0, 0, 0, 0.38)" , minHeight:"3em"}} />
    <Typography sx={{  color: isDarkMode === false ? '#000' : "#d7e1ec",fontWeight:"700" , fontSize:"19px"}}>{dat.name}</Typography>
    <Typography sx={{fontSize:"15px",color: isDarkMode === false ? '#000' : "#d7e1ec" , opacity:"0.5"}}>{dat.details}</Typography>
</Box>

              ))
            }
            
          </Box>
     </Box>
  </Box>
  </>
  )
}
