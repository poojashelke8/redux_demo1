import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState : [],
    reducers:{
        addUsers(state,action){},
        deleteUsers(state,action){},
    }
})

console.log(userSlice.action)

export default userSlice.reducer;