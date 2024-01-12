import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name : "user",

    initialState : {
    users : [],
    queries : []
    },

    reducers : {
        getusers : (state , action) => {
            state.users = action.payload.map( user => {
                return { 
                    id : user._id ,
                    sub : user.sub,
                    desc : user.desc,
                    file : user.file,
                    date : user.date
                }
            } )
        },
        getUsers : (state , action) => {
            state.queries = action.payload.map( user => {
                return { 
                   username : user.userName,
                   class : user.userclass,
                   contact : user.contact,
                   email : user.email
                }
            } )
        }
    }
})

export const{getusers,getUsers} = userSlice.actions;
export default userSlice.reducer;
