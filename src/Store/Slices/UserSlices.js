import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"users",
    initialState : [],
    reducers:{
        addUsers(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        deleteUsers(state,action){},
    }
})

console.log(userSlice.actions)

export default userSlice.reducer;
export const {addUsers} = userSlice.actions;