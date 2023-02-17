import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cartItems: [],
    favoriteItems: [],
    totalAmount: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );
                    state.cartItems = nextCartItems;
                }
                return state;
            });
        },
        addFavorite: (state, action) => {
            const newFavorite = action.payload;
            state.favoriteItems.push(newFavorite);
        },
        removeFavorite: (state, action) => {
            const favoriteToRemove = action.payload;
            state.favoriteItems = state.favoriteItems.filter(
                item => item.id !== favoriteToRemove.id
            );
        },
        
        getTotals: (state, action) => {
            let total = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price } = cartItem;
                    cartTotal += price;
                    return cartTotal;
            },
                0)
            total = parseFloat(total.toFixed(0))
            state.totalAmount=total
        }
    }
})

export const { addToCart, removeFromCart, addFavorite, removeFavorite, getTotals } = cartSlice.actions

export default cartSlice.reducer

export const cartSelector = state => state.cart