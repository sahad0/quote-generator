
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
           
            const flag = Boolean(state.value.quotes.find(obj => obj._id === action.payload._id));
            if(!flag){
                state.value.quotes = [...state.value.quotes,action.payload];
            }
        },
        RemoveController:(state, action:PayloadAction<QuoteType>)=>{
            
            state.value.quotes = state.value.quotes.filter((k)=> k._id!==action.payload._id);
           
        },

    }
})

export const { AddController,RemoveController  } = storeSlice.actions;

export default storeSlice.reducer;