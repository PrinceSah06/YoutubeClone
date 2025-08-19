import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants/const";
const ChatSlice = createSlice({
  name: 'Chat',
  initialState: {
    massage: []
  },
  reducers: {
    addMassages: (state, action) => {
      state.massage.push(action.payload);
      const MAX_MESSAGES = 10; // or use LIVE_CHAT_COUNT if you have it
      if (state.massage.length > MAX_MESSAGES) {
        state.massage.shift(); // remove oldest (at index 0)
      }
    }
  }
})


export const {addMassages}= ChatSlice.actions
export default ChatSlice.reducer