import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {},{},{}
    ],
};

export const swipeScreenSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            if(Object.keys(state.value[0]).length === 0 ){
                state.value = [action.payload]
        
            } else{
                state.value.push(action.payload)
            }

        }
    }

})

export const { addMovie } = swipeScreenSlice.actions

export default swipeScreenSlice.reducer