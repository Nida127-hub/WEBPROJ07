import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");

const initialState = {
  cartItems: savedCart ? JSON.parse(savedCart) : [],
};

const saveCart = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCart(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      saveCart(state.cartItems);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity++;
      }

      saveCart(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload
        );
      }

      saveCart(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveCart(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;