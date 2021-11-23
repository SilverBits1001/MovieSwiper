import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle',
};

export const swipeScreenSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.value += 1
        }
    }

})

export const { addMovie } = swipeScreenSlice.actions

export default swipeScreenSlice.reducer