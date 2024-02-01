import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        cacheData:{},
    },
    reducers:{
        cacheResults: (state,action)=>{
            state.cacheData = {...state.cacheData, ...action.payload }
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;