import { configureStore } from '@reduxjs/toolkit';
import { userDataSlice } from './';

export const store = configureStore({
    reducer: {
        //auth: authSlice.reducer,
        userData: userDataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
