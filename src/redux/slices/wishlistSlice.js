import { createSlice } from "@reduxjs/toolkit";

const savedWishlist = localStorage.getItem("wishlistItems");

const initialState = {
  wishlistItems: savedWishlist ? JSON.parse(savedWishlist) : [],
};

const saveWishlist = (items) => {
  localStorage.setItem("wishlistItems", JSON.stringify(items));
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishlistItems.push(action.payload);
      }

      saveWishlist(state.wishlistItems);
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );

      saveWishlist(state.wishlistItems);
    },
  },
});

export const {
  toggleWishlist,
  removeFromWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;