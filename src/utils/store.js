

import {configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import searchReducer from './searchSlice'
import ChatReducer from './chatSlice'


const store = configureStore ({
    reducer:{
        app:appReducer,
        search:searchReducer,
        chat:ChatReducer

    }

})

export default store