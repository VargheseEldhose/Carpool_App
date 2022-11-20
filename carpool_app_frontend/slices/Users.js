import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        Email: null,
        password: null,
        Phone: null
       
    },

    reducers: {
    SetEmail: (state, action) => {
            state.Email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setPhone: (state, action) => {
            state.Phone = action.payload;
        }
    }
});

export const {
    setPassword,
    SetEmail,
    setPhone,
    
} = userSlice.actions;

//selectors
export const selectEmail = (state) => state.user.Email;
export const selectPassword = (state) => state.user.password;
export const selectPhone = (state) => state.user.Phone;


export default userSlice.reducer;