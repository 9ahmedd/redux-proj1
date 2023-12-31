import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
  name: 'counter',
    initialState: {
        name: "",
        email:""
  },
  reducers: {
    addUser: (state,action) => {
      
        state.name = action.payload.name;
         state.email = action.payload.email
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer