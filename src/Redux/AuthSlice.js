import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("auth/login", async(credential, THUNK_API)=>{
    try{
        const res = await axios.post("https://ur-assets-management-system-backend.onrender.com/api/v1/auth/login", credential );
        localStorage.setItem("user", JSON.stringify(res.data)); 
        console.log('logged In ' + res.data);
    return res.data;
    } catch(err){
        console.log(' fail to loggin ');  
        return THUNK_API.rejectWithValue(err.res.data)
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState:{
        user: null,
        loading: false,
        error: null,
    },
    reducers:{
        logout: (state ) =>{
            state.user = null;
            state.error = null;
            localStorage.removeItem("user"); 
            console.log('logged OUT '); 
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loginUser.pending, (state) =>{
            state.loading = true
            state.error = false
        })
        .addCase(loginUser.rejected, (state, actions) =>{
            state.loading = false
            state.error = actions.payload
        })
        .addCase(loginUser.fulfilled, (state, actions) =>{
            state.loading = false
            state.user = actions.payload
        })
    }
});
export const {logout} = authSlice.actions;
export default authSlice.reducer