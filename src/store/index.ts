import { configureStore, createSlice } from "@reduxjs/toolkit";

// O Slice seria a fatia do estado, pedaço menor do estado
const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {}
})

// O reducer seria as informações que vão ser compartilhadas globalmente
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})