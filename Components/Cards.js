import { Fab, Paper, Skeleton, Stack, Tooltip, Typography ,Box, IconButton, Dialog, TextField, Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import { useEffect, useState } from "react";
import PaymentsIcon from '@mui/icons-material/Payments';
import axios from "axios";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import bg from '../Components/Images/bg.svg'
import { useRouter } from "next/router";
import EditIcon from '@mui/icons-material/Edit';
import Cookies from "js-cookie";
import { DeleteOutlineOutlined } from "@mui/icons-material";
const Cards = () => {
   
      const router = useRouter();
      const session = () => {
        if (typeof sessionStorage !== 'undefined') {
          const token = sessionStorage.getItem("token");
          return {token:token}
        } else {
          // Handle the case where sessionStorage is not available
          return { token: null };
        }
      };
    
        const {token} = session()
        const tokencr = Cookies.get("token")
        const [openEditDialog, setOpenEditDialog] = useState(false);
const [editedBudget, setEditedBudget] = useState('');

    const [budget , setBudget] = useState('')
    const [getbudget , setGetbudget] = useState(0)
    const [expense , setExpense] = useState('')
    const [label , setLabel] = useState('')
    const [getexpense , setGetexpense] = useState(0)
    const [createexpense , setCreateexpense] = useState(null)
    const [createbudget , setCreatebudget] = useState(null)
    const [openDialog , setOpenDialog] = useState(false)
    const [openDialog1 , setOpenDialog1] = useState(false)
    const [id , setId] = useState('')
    const createBudget = async () => {
        try {
          const response = await axios.post('https://xpenso-backend.onrender.com/api/createBudget', { value: budget } , {
            headers: {
              Authorization: `Bearer ${token || tokencr}`,
            },});
          console.log(response.data.data.value);
       sessionStorage.setItem("budget value" ,response.data.data.value)
       setCreatebudget(response.data.data.value)
       Cookies.set("budgetvalue" ,response.data.data.value)
       Cookies.set('budgetid' , response.data.data._id)
          setOpenDialog(false);
        } catch (error) {
          console.error(error.message);
          // Handle error as needed
        }
      };
      
      const createExpense = async () => {
        try {
          const response = await axios.post(
            'https://xpenso-backend.onrender.com/api/createExpense' , {value: expense , label: label} , {
              headers:{
                Authorization: `Bearer ${token || tokencr}`,
              }
             },);
          console.log(response.data.data.value);
          Cookies.set('expense value',response.data.data.value );
          setId(response.data.data.value)
          setCreateexpense(response.data.data.value)
        setOpenDialog1(false);
        } catch (error) {
          console.error(error.message);
          // Handle error as needed
        }
      };
const overalldata = async ()=>{
  try{
    const totalexpense = await axios.post(
      'https://xpenso-backend.onrender.com/api/calculateTotalExpense',
      {},
      {
        headers: {
          Authorization: `Bearer ${token || tokencr}`,
        },
      }
    );
    
  console.log(totalexpense);

  sessionStorage.setItem("totalexpense" ,totalexpense.data.data.totalExpense)
  Cookies.set("totalexpense" ,totalexpense.data.data.totalExpense)
  sessionStorage.setItem("overallbudget" ,totalexpense.data.data.overallBudget)
  Cookies.set("overallbudget" ,totalexpense.data.data.overallBudget)
  } catch(err){
    console.log(err);
  }
  
}
     

      useEffect (()=>{
       overalldata()
       setGetbudget(Cookies.get("overallbudget"))
       console.log(setGetbudget(Cookies.get("overallbudget")));
       setGetexpense(Cookies.get("totalexpense"));
       setId(Cookies.get('budgetid'))
      },[getexpense])
      const handleEditBudget = () => {
        setOpenEditDialog(true);
        setEditedBudget(getbudget);
     };
  
     
     const handleSaveEdit = async () => {
      try {
         const response = await axios.put(`https://xpenso-backend.onrender.com/api/updateBudget/${id}`, { value: editedBudget  }, {
            headers: {
               Authorization: `Bearer ${token || tokencr}`,
            },
         });
   
         console.log(response.data.data.value);
         // Update the state or perform any additional actions as needed
         setGetbudget(response.data.data.value);
         setOpenEditDialog(false);
      } catch (error) {
         console.error(error.message);
         // Handle error as needed
      }
   };
   




    return ( 
        <>
           <Stack gap='1em' flexDirection={{lg:"row" , xs:"column"}} boxShadow='6px 6px 12px #b8b9be,-6px -6px 12px #fff!important'  borderRadius='7px' bgcolor='none' padding={{sm:"1.5em 1.5em" , xs:"1em 1em"}} sx={{width:{sm:"100%" , xs:"auto"} , height:"100%" , minHeight:"8em" , minWidth:"300px"}}>
      <Stack flexGrow={{lg:"0" ,xs:"1"}} flexDirection='row' justifyContent='center' alignItems='center' gap={{xl:"1em" , sm:"0em" , xs:"1em"}} boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important'  borderRadius='7px'height='100%' width={{lg:"30%" , xs:"100%"}} sx={{backgroundImage:`url(${bg.src})`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat" , position:"relative" , padding:{lg:"0 0" , xs:"2em 0"} }}>
     
      {
       (getbudget === 0 && createBudget === null)  ? (
        <>
          <Stack flexDirection='column' justifyContent='center' alignItems='center' gap='0.5em'>
            <Stack flexDirection='row' justifyContent='center' alignItems='center' width='3em' height='3em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='50%'><IconButton onClick={()=> setOpenDialog(true)}><AddCircleIcon sx={{transform:"scale(1.5)", color:"#000"}}/></IconButton></Stack>
            <Typography fontSize='17px' fontWeight='700'>Add your Budget</Typography>
          </Stack>
        </>
      ) : (
        <>
 <Stack flexDirection='column' justifyContent='center' gap='0.5em'>
   <Typography fontSize='19px' fontWeight='700'>Total Budget</Typography>
   <Typography fontSize='21px' fontWeight='700'>&#8377;{getbudget}</Typography>
</Stack>
<Stack flexDirection='row' justifyContent='center' alignItems='center' width='4em' height='4em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='50%'>
   <SavingsIcon sx={{transform:"scale(1.5)"}}/>
</Stack>
<IconButton sx={{position:"absolute" , bottom:"0" , right:"0"}} onClick={() => handleEditBudget()}><EditIcon /></IconButton>
        </>
      )}
      </Stack>
      <Stack flexGrow={{lg:"0" ,xs:"1"}} flexDirection='row' justifyContent='center' alignItems='center' gap='1em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important'  borderRadius='7px' bgcolor='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' height='100%' width={{lg:"30%" , xs:"100%"}} sx={{backgroundImage:`url(${bg.src})`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat",padding:{lg:"0 0" , xs:"2em 0"}  }}>
            <>
      <Stack flexDirection='column' justifyContent='center' alignItems='center' gap='0.5em'>
      <Stack flexDirection='row' justifyContent='center' alignItems='center' width='3em' height='3em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='50%'><IconButton onClick={()=> setOpenDialog1(true)}><AddCircleIcon sx={{transform:"scale(1.5)" , color:"#000"}}/></IconButton></Stack>
                <Typography fontSize='17px' fontWeight='700'>Add your Expenses</Typography>
              </Stack>
            </>
      </Stack>
{/* Income */}
<Stack flexGrow={{lg:"0" ,xs:"1"}} flexDirection='row' justifyContent='center' alignItems='center' gap='1em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important'  borderRadius='7px' bgcolor='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' height='100%' width={{lg:"30%" , xs:"100%"}} sx={{backgroundImage:`url(${bg.src})`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat",padding:{lg:"0 0" , xs:"2em 0"}  }}>
  <Stack flexDirection='column'>
    <Typography fontSize='19px' fontWeight='700'>Income</Typography>
    {getbudget ? (
      <Typography fontSize='21px' fontWeight='700' color='#4caf50' flexDirection='row' alignItems='center' gap='0.2em'>
        {Math.max(getbudget - getexpense, 0)} <ArrowUpwardIcon/>
      </Typography>
    ) : (
      <Skeleton variant="text" sx={{ fontSize: '21px' }} />
    )}
  </Stack>
  <Stack flexDirection='row' justifyContent='center' alignItems='center' width='4em' height='4em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='50%'><TrendingUpIcon sx={{transform:"scale(1.5)"}}/></Stack>
</Stack>

{/* Loss */}
<Stack flexGrow={{lg:"0" ,xs:"1"}} flexDirection='row' justifyContent='center' alignItems='center' gap='1em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important'  borderRadius='7px' bgcolor='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' height='100%' width={{lg:"30%" , xs:"100%"}} sx={{backgroundImage:`url(${bg.src})`, backgroundSize:"cover" ,backgroundRepeat:"no-repeat",padding:{lg:"0 0" , xs:"2em 0"}  }}>
  <Stack flexDirection='column'>
    <Typography fontSize='19px' fontWeight='700'>Loss</Typography>
    {getbudget ? (
       <Typography fontSize='21px' fontWeight='700' color='#ff4444' flexDirection='row' alignItems='center' gap='0.2em'>
       {Math.max(getexpense - getbudget, 0)} <ArrowDownwardIcon/>
     </Typography>
    ) : (
      <Skeleton variant="text" sx={{ fontSize: '21px' }} />
    )}
  </Stack>
  <Stack flexDirection='row' justifyContent='center' alignItems='center' width='4em' height='4em' boxShadow='inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important' borderRadius='50%'><TrendingDownIcon sx={{transform:"scale(1.5)"}}/></Stack>
</Stack>

</Stack>

        <Dialog open={openDialog}>
        <Stack padding="2em">
          <Typography variant="h5" fontWeight="bold">
            Add Budget
          </Typography>
          <TextField
            label="Budget Value"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setBudget(e.target.value)}
          />
        <Stack flexDirection='row' marginTop='1.2em' alignItems='end' justifyContent='end' gap='0.5em'>
        <Button variant="outlined" sx={{borderColor:"#407bff !important" , color:"#2d4cc8"}} onClick={()=> setOpenDialog(false)}>
            Close
          </Button>
        <Button variant="contained" sx={{background:"#407bff !important" , color:"#e6e7ee"}} onClick={createBudget}>
            Submit
          </Button>
        </Stack>
          
        </Stack>
      </Dialog>

      <Dialog open={openDialog1}>
        <Stack padding="2em">
          <Typography variant="h5" fontWeight="bold">
            Add Expense
          </Typography>
          <TextField
            label="Expense Value"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setExpense(e.target.value)}
          />
           <TextField
            label="Label"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setLabel(e.target.value)}
          />
        <Stack flexDirection='row' marginTop='1.2em' alignItems='end' justifyContent='end' gap='0.5em'>
        <Button variant="outlined" sx={{borderColor:"#407bff !important" , color:"#2d4cc8"}} onClick={()=> setOpenDialog1(false)}>
            Close
          </Button>
        <Button variant="contained" sx={{background:"#407bff !important" , color:"#e6e7ee"}} onClick={createExpense}>
            Submit
          </Button>
        </Stack>
          
        </Stack>
      </Dialog>
{/* edit budget */}
<Dialog open={openEditDialog}>
   <Stack padding="2em">
      <Typography variant="h5" fontWeight="bold">
         Edit Budget
      </Typography>
      <TextField
         label="Edited Budget Value"
         variant="outlined"
         fullWidth
         margin="normal"
         value={editedBudget}
         onChange={(e) => setEditedBudget(e.target.value)}
      />
      <Stack flexDirection='row' marginTop='1.2em' alignItems='end' justifyContent='end' gap='0.5em'>
         <Button variant="outlined" sx={{borderColor:"#407bff !important" , color:"#2d4cc8"}} onClick={() => setOpenEditDialog(false)}>
            Close
         </Button>
         <Button variant="contained" sx={{background:"#407bff !important" , color:"#e6e7ee"}} onClick={handleSaveEdit}>
            Save
         </Button>
      </Stack>
   </Stack>
</Dialog>
        </>
     );
}
 
export default Cards;