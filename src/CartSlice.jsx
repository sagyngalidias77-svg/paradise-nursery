import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload: product }) {
      const item = state.items.find(({ id }) => id === product.id);
      if (item) item.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
    updateQuantity(state, { payload: { id, quantity } }) {
      if (!Number.isInteger(quantity)) return;
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== id);
        return;
      }
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectItems = state => state.cart.items;
export const selectCartCount = state =>
  selectItems(state).reduce((count, item) => count + item.quantity, 0);
export const selectCartTotal = state =>
  selectItems(state).reduce((total, item) => total + item.quantity * item.price, 0);
export default cartSlice.reducer;
