import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        origin: null,
        destination: null,
        travelTimeInformation: null,
        date: new Date().toISOString()
    },

    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
    }
});

export const {
    setOrigin,
    setDestination,
    setTravelTimeInformation,
    setDate
} = navSlice.actions;

//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectDate = (state) => state.nav.date;

export default navSlice.reducer;