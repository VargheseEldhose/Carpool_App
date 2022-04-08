import {createSlice} from "@reduxjs/toolkit";
const rinitialState={
    Origin:null,
    rDestination:null,
    travelTimeInformation:null
}

export const navSliceRider=createSlice({
    name:'nav',
    rinitialState,
    reducers:{
        setROrigin:(state, action)=>{
            state.Origin=action.payload;
        },
        setRDestination:(state,action)=>{
            state.rDestination=action.payload;
        },
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation=action.payload;
        },
    },


});

export const {setROrigin,setRDestination,setTravelTimeInformation}=navSliceRider.actions;

//selectors
export const selectROrigin =(state)=>state.nav.Origin;
export const selectRDestination=(state)=>state.nav.rDestination;
export const selectTravelTimeInformation=(state)=>state.nav.travelTimeInformation;

export default navSliceRider.reducer;