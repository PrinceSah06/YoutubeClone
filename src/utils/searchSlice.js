import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

const searchSlice = createSlice({
    name: 'search',
    initialState:{


    },
    reducers:{
        cacheResults :(state,action)=>{
            state=Object.assign(state,action.payload)
            // state = {...action.payload ,...state}          
        },
    }
})

export const{ cacheResults} = searchSlice.actions;
export default searchSlice.reducer ;