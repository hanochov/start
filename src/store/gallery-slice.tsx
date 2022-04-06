import { createSlice } from "@reduxjs/toolkit";

interface MyState {
    currentColor: string;
  }
  const INITIAL_STATE: MyState = {
    currentColor: "No Color",
  }

const gallerySlice =  createSlice({
    name:'gallery',
    initialState :INITIAL_STATE,
    reducers:{
        changeColor(state,action){
            state.currentColor = action.payload
        }
    }

})

export const galleryActions = gallerySlice.actions;
export default gallerySlice;