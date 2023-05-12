import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name: 'usersData',
    initialState: {
        cntType: ""
    },
    reducers:{
        contactType(state,action){
            state.cntType=action.payload
        },
        removeUsers(state,action){

          //console.log('res',state.userList);
          state.userList.splice(action.payload,1)
        },
        deleteAllUsers(state,action){
           state.userList=[]
        },
        updateUsers(state,action){
            state.userList.splice(action.payload.index,1,{name: action.payload.value })
        }
    }
})

//console.log(UserSlice);

export default UserSlice.reducer;
export const {contactType,removeUsers,deleteAllUsers,updateUsers} =UserSlice.actions; // this is action creator yani iske zarye store per data post hoga