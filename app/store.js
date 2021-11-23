import { configureStore } from '@reduxjs/toolkit'
import swipeScreenReducer from '../features/swipeComponents/swipeScreenSlice'
export default configureStore({
    reducer: {
        usersMovies: swipeScreenReducer
    }
})