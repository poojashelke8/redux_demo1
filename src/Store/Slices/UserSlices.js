import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState : [],
    reducers:{
        addUsers(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        deleteUsers(state,action){
            return state.filter((_,index)=> index !== action.payload);
        },
        deleteAll(){
            return []
        }
    }
})

export const {addUsers,deleteUsers,deleteAll} = userSlice.actions;
export default userSlice.reducer;