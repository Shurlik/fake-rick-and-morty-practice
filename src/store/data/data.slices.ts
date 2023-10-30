import {CharacterType} from "../../types";
import {createSlice} from "@reduxjs/toolkit";

type InitStateType = {
  data: CharacterType[],
  history: string[]

}

const initialState = {
  data: [],
  history: []
} as InitStateType


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload
    },
    clearData(state) {
      state.data = []
    },
    setHistory(state, action) {
      state.history = action.payload
    },
    clearHistory(state) {
      state.history = []
    },
  }
})

export default dataSlice.reducer;
export const {
  setData,
  clearData,
  setHistory,
  clearHistory
} = dataSlice.actions
