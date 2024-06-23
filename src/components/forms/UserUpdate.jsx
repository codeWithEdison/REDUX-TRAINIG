import React, { useState } from 'react';
import { TextField, Button, Box, colors, } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { update, remove } from '../../Redux/userSlice'; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { UpdateUser } from '../../Redux/ApiCalls';
import Alert from '@mui/material/Alert'; 
import AlertTitle from '@mui/material/AlertTitle'; 
import { dedleteUser, deleteUser, updateUser2 } from '../../Redux/userSlice';
// import remove

const UserUpdate = () => { 
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const {userInfo, pending, error} = useSelector((state) => state.user); 
    const [success, setSucces] = useState(false);
    const dispatch = useDispatch();
    
    const handleUpdate = (e) =>{
        e.preventDefault(); 
        // UpdateUser({name, email}, dispatch); when we don't use asyncthunk 
        dispatch(updateUser2({name, email})) ; //when we use async thunk
        setSucces(true);
    }
    const handleRemove = (e) =>{
        e.preventDefault(); 
        dispatch(deleteUser());   
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleName = (e) =>{
        setName(e.target.value);
    }
    console.log(name, email); 

  return (
    <Box 
      component="form" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: 400, 
        mx: 'auto', 
        mt: 4 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        onChange={handleName}
        placeholder={userInfo.name}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        onChange={handleEmail}
        placeholder={userInfo.email}   
      />
      <Button
      onClick={handleUpdate} 
      variant="contained" color="primary" type="submit">
        Update
      </Button>
      <Button 
      onClick={handleRemove}
      variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
{error&& <Alert variant="filled" severity="error">
        some thing  went wrong .
      </Alert>} 
      {success && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  useer updated succesfully 
</Alert>}
    </Box>
    
  );
};

export default UserUpdate;
