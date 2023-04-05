
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuoteType } from "../types";

interface Colors {
    quotes:QuoteType[]
}

const val:Colors = {
       quotes:[]
}



const storeSlice = createSlice({
    name: "colorStore",
    initialState: { value: val },
    reducers: {
        AddController:(state, action:PayloadAction<QuoteType>)=>{
           
        },
        RemoveController:(state, action:PayloadAction<QuoteType>)=>{
           
        },

    }
})

export const { AddController,RemoveController  } = storeSlice.actions;

export default storeSlice.reducer;