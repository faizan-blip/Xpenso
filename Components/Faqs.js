import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import faq from '../Components/Images/car-glass-faq.svg'
import bg1 from '../Components/Images/wave-haikei.svg'
import bg2 from '../Components/Images/bgd.svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {GrAdd} from 'react-icons/gr'
import Image from 'next/image'
import { TbReportSearch } from 'react-icons/tb'
import { RiAccountPinCircleFill } from 'react-icons/ri'
import {GiExpense} from 'react-icons/gi'
import { MdCalendarMonth } from 'react-icons/md'
export default function Faqs() {

    const {isDarkMode} = useContext(AppContext)

    const faq1 = [
        {icons:<RiAccountPinCircleFill size={22}/>,question:"Creating an Account" , answer:`To create an account in our expense tracker, follow these steps:
        Click on the "Login" button.
        Fill in the required information, such as your name, email address, and password.
        Verify your email address through the confirmation link sent to your registered email.
        Congratulations! Your account is now created, and you can log in using your credentials`},
        {icons:<MdCalendarMonth size={22}/>,question:"Setting Budgets" , answer:`Setting budgets in our expense tracker helps you manage your spending. To set budgets for different expense categories, follow these instructions:
        Log in to your account.
        Navigate to the "Budgets" section.
        Click on the "Add Budget" button or select a specific expense category to set a budget for.
        Enter the budget amount for the selected category and set the time frame (e.g., monthly, weekly).
        Save your budget settings, and the expense tracker will now monitor your spending within the allocated limits.`},
        {icons:<GiExpense size={22}/>,question:"Adding Expenses" , answer:`Adding expenses to our tracker is simple and allows you to keep track of your spending habits accurately. Here's how you can add expenses:
        Locate the "Add Expense".
        Enter the details of the expense, such as the date, category, amount, and any additional notes or descriptions.
        Save the expense, and it will be recorded in your account's transaction history.`},
        {icons:<TbReportSearch size={22}/>,question:"Viewing Reports" , answer:`Our expense tracker offers insightful reports to help you analyze your financial activities and identify spending patterns. To view reports:
Look for the "Reports".
Choose the type of report you wish to view, such as monthly expenses.
Generate the report.
Review the visual representations of your financial data to gain valuable insights into your spending habits.`},
    ]

  return (
    <>
   <div id='faqs'></div> 

    <Box sx={{display:"flex" , justifyContent:{lg:"center" , xs:"center"} , height:"100%" , minHeight:"80vh" , background: isDarkMode === false ? `url(${bg1.src})` : `url(${bg2.src})` , backgroundSize:"cover" , backgroundRepeat:"no-repeat" , backgroundPosition:"center" , padding:"3em 3em" , alignItems:{lg:"start" , xs:"center"} , gap:{lg:"5em" , xs:"2.5em"} , flexDirection:{lg:"row" , xs:"column-reverse"}}}>
       <Image src={faq} alt="" width={600} className='faq'/>
<Box sx={{display:"flex" , flexDirection:"column" , alignItems:"start" , width:{lg:"40%" , xs:"center"} , gap:"1.5em"}}>
    <Box sx={{display:"flex" , flexDirection:"column"}}>
<Typography sx={{   color: isDarkMode === false ? '#000' : "#d7e1ec", fontWeight:"700" , fontSize:"20px"}}>Frequently Asked Question</Typography>
<Divider sx={{width:"5em" , borderColor:"#78c5d6" , height:"0.5em" , borderRadius:"15px" , borderBottomWidth:"3px"}}/>
</Box>
<Box sx={{display:"flex" , flexDirection:"column" , gap:"1.2em"}}>
    {
        faq1.map((faq1 , index)=>(
<Accordion key={index} sx={{background:isDarkMode === false ? "  #dde1e7" : "#27292b"  }}>
        <AccordionSummary
          expandIcon={<GrAdd size={25} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{alignItems:"center"  , display:"flex" , gap:"0.5em",color: isDarkMode === false ? '#000' : "#d7e1ec"}}>{faq1.icons}{faq1.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: isDarkMode === false ? '#000' : "#d7e1ec"}}>
        {faq1.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))
    }
      </Box>
</Box>
    </Box>
    </>
  )
}
