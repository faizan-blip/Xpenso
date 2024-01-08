import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Stack, TableContainer, TableRow, TableCell, TableBody, TableHead, Table, TablePagination, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Tablee = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedId, setSelectedId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirmationDialog, setDeleteConfirmationDialog] = useState(false);
  const [editedLabel, setEditedLabel] = useState('');
  const [editedValue, setEditedValue] = useState('');
const router = useRouter()
  const tokencr = Cookies.get("token");
const {accesstoken} = router.query;
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getExpense = async () => {
    try {
      const response = await axios.get('https://xpenso-backend.onrender.com/api/getExpense', {
        headers: {
          Authorization: `Bearer ${tokencr || accesstoken}`,
        },
      });

      const formattedData = response.data.data.map((item) => ({
        ...item,
        createdAt: formatDate(item.createdAt),
      }));

      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditExpense = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedId(null);
    setOpenDialog(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://xpenso-backend.onrender.com/api/editExpense/${selectedId}`,
        {
          value: editedValue,
          label: editedLabel,
        },
        {
          headers: {
            Authorization: `Bearer ${tokencr || accesstoken}`,
          },
        }
      );

      console.log(response.data);
      setOpenDialog(false);
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  const handleDeleteExpense = (id) => {
    setSelectedId(id);
    setDeleteConfirmationDialog(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      await axios.delete(`https://xpenso-backend.onrender.com/api/deleteExpense/${selectedId}`, {
        headers: {
          Authorization: `Bearer ${tokencr || accesstoken}`,
        },
      });

      toast.success('Expense deleted successfully!');
      getExpense();
    } catch (error) {
      console.error('Error deleting expense:', error);
      toast.error(error.response.data.message);
    } finally {
      setSelectedId(null);
      setDeleteConfirmationDialog(false);
    }
  };

  useEffect(() => {
    getExpense();
  }, [handleSave]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Stack
        overflow='hidden'
        width={{lg:"60%"  , sm:"100%" , xs:"300px"}} 
        height='20em'
        boxShadow='6px 6px 12px #b8b9be,-6px -6px 12px #fff!important'
        padding='1em 1em'
        borderRadius='10px'
        flexDirection='column'
        justifyContent='space-between'
      >
        <TableContainer  className="scrolllight" sx={{ maxHeight: "20em" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ boxShadow: 'inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff!important', background: "none !important", borderRadius: "10px" }}>
                <TableCell sx={{ background: "none", fontSize: "18px", fontWeight: "900" }} >Id</TableCell>
                <TableCell sx={{ background: "none", fontSize: "18px", fontWeight: "900" }} >Label</TableCell>
                <TableCell sx={{ background: "none", fontSize: "18px", fontWeight: "900" }}>Value</TableCell>
                <TableCell sx={{ background: "none", fontSize: "18px", fontWeight: "900" }}>Date</TableCell>
                <TableCell sx={{ background: "none", fontSize: "18px", fontWeight: "900" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontSize: "15px", fontWeight: "400" }}>{index}</TableCell>
                  <TableCell sx={{ fontSize: "15px", fontWeight: "400" }}>{row.label}</TableCell>
                  <TableCell sx={{ fontSize: "15px", fontWeight: "400" }}>{row.value}</TableCell>
                  <TableCell sx={{ fontSize: "15px", fontWeight: "400" }}>{row.createdAt}</TableCell>
                  <TableCell sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' width='3em' height='3em' boxShadow='2px 2px 5px #babecc,-5px -5px 10px #ffffff73 !important' borderRadius='50%'> <IconButton onClick={() => handleEditExpense(row._id)}><EditOutlined /></IconButton></Stack>
                    <Stack flexDirection='row' justifyContent='center' alignItems='center' width='3em' height='3em' boxShadow='2px 2px 5px #babecc,-5px -5px 10px #ffffff73 !important' borderRadius='50%'> <IconButton onClick={() => handleDeleteExpense(row._id)}><DeleteOutline /></IconButton></Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>

      {/* Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <Stack padding="2em">
          <Typography variant="h5" fontWeight="bold">
            Edit Expense
          </Typography>
          <TextField label="Expense Label"
            variant="outlined"
            fullWidth
            margin="normal" onChange={(e) => setEditedLabel(e.target.value)} />
          <TextField label="Expense Value"
            variant="outlined"
            fullWidth
            margin="normal" onChange={(e) => setEditedValue(e.target.value)} />
          <Stack flexDirection='row' marginTop='1.2em' alignItems='end' justifyContent='end' gap='0.5em'>
            <Button variant="outlined" sx={{ borderColor: "#407bff !important", color: "#2d4cc8" }} onClick={handleCloseDialog}>Close</Button>
            <Button variant="contained" sx={{ background: "#407bff !important", color: "#e6e7ee" }} onClick={handleSave}>Update</Button>
          </Stack>
        </Stack>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationDialog} onClose={() => setDeleteConfirmationDialog(false)}>
        <Stack padding="2em">
        <Typography variant="h5" fontWeight="bold">
        Confirm Deletion
          </Typography>
          <DialogContent>
            <Typography>
              Are you sure you want to delete this expense? 
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" sx={{ borderColor: "#407bff !important", color: "#2d4cc8" }} onClick={() => setDeleteConfirmationDialog(false)} color="primary">
              No
            </Button>
            <Button variant="contained" sx={{ background: "#407bff !important", color: "#e6e7ee" }} onClick={handleDeleteConfirmed} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </>
  );
};

export default Tablee;
