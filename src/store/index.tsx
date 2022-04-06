import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from './gallery-slice';

const store = configureStore({
    reducer:{gallery:gallerySlice.reducer}
})

export default store;