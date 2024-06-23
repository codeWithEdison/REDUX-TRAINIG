import axios from "axios";
import { updateStart, updateFail, updateSucces } from "./userSlice";

 export const UpdateUser  = async (user, dispatch)=>{
    dispatch(updateStart());

    try{
        const res = await axios.put("http://localhost:5000/users/1", user);  
        dispatch(updateSucces(res.data));

    } catch(error){
        dispatch(updateFail());
    }
 }