
// import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export const updateUser2 = createAsyncThunk("/user/update", async (user) =>{
//     const res = await axios.put("http://localhost:5000/users/1", user

//     );
//     return res.data;
// }
// );
// export const dedleteUser = createAsyncThunk("/user/update", async () =>{
//     const res = await axios.delete("http://localhost:5000/users/1"

//     );
//     return res.data;
// }
// );
// export const userSlice= createSlice({
//     /*
//     *LOCAL UPDATE ********
    
//     */
//     // name: "user",

//     // initialState:{
//     //     name:"programmer Datch",
//     //     email: "edsnkvn@gmail.com"
//     // },
//     // reducers:{
//     //    update: (state, actions) =>{
//     //     state.name = actions.payload.name;
//     //     state.email = actions.payload.email;

//     //    },
//     //    remove:(state) => (state = {}), 
       
//     // }
//                 /*
//     *API UPDATE 
    
//     */
//    name: "user",

//    initialState:{
//     userInfo: {
//     name: 'edsn',
//     email: 'kvn@gmail.com'
//     },
//     loading: false,
//     error: false,

//    },
//    reducers:{
//     /*
//             *WITH OUT ASYNCTHIUNK
//     */
// //    updateStart: (state)=>{
// //     state.loading = true
// //    },
// //     updateSucces: (state, actions)=>{
// //         state.loading = false 
// //         state.userInfo = actions.payload
// //     },
// //     updateFail:(state) =>{
// //         state.loading = false
// //         state.error = true
// //     }
 
//    },
//    extraReducers:{
//     [dedleteUser.pending]:(state) =>{
//         state.pending= true;
//         state.error = false;
//     }, 
//     [dedleteUser.fulfilled]:(state, actions) =>{
//         state.pending= false;
//         state.userInfo = actions.payload;
//     } ,
//     [dedleteUser.rejected]:(state) =>{
//         state.pending= false;
//         state.error = true;
//     } 
//    },
//    extraReducers:{
//     [updateUser2.pending]:(state) =>{
//         state.pending= true;
//         state.error = false;
//     }, 
//     [updateUser2.fulfilled]:(state, actions) =>{
//         state.pending= false;
//         state.userInfo = actions.payload;
//     } ,
//     [updateUser2.rejected]:(state) =>{
//         state.pending= false;
//         state.error = true;
//     } 
//    },
    
// });

// export const  {updateStart, updateFail, updateSucces} = userSlice.actions; 
// export default userSlice.reducer;  
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("/user/update", async (user) => {
  const res = await axios.put("http://localhost:5000/users/2", user); 
  return res.data;
});

export const deleteUser = createAsyncThunk("/user/delete", async () => {
  const res = await axios.delete("http://localhost:5000/users/1");
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: 'edsn',
      email: 'kvn@gmail.com'
    },
    loading: false,
    error: false,
    pending: false, // Added to handle async operation state
  },
  reducers: {
    // You can add your local reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(updateUser2.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(updateUser2.fulfilled, (state, action) => {
        state.pending = false;
        state.userInfo = action.payload;
      })
      .addCase(updateUser2.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { updateStart, updateFail, updateSucces } = userSlice.actions;
export default userSlice.reducer;
