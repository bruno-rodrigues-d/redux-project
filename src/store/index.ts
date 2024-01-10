import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// O Slice seria a fatia do estado, pedaço menor do estado
const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    }
  }
})

// O reducer seria as informações que vão ser compartilhadas globalmente
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;