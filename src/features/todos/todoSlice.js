import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    loadTodos: (state) => {
      state.loading = true;
    },
    setTodos: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((t) => t.id === id);
      if (todo) todo.text = text;
    },
    clearTodos: (state) => {
      state.items = [];
    },
  },
});

export const {
  loadTodos,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
