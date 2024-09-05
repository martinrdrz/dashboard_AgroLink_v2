//sirve para mantener la infromacion del Usuario Logueado.

import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        status: 'loading', //loading, ready, error
        data: null,
    },
    reducers: {
        doSetReadyState: (state) => {
            state.status = 'ready';
            // state.data = state.data;
        },
        doSetLoadingState: (state) => {
            state.status = 'loading';
            // state.data = state.data;
        },
        doSetErrorState: (state) => {
            state.status = 'error';
            // state.data = state.data;
        },
        doSetAllData: (state, { payload }) => {
            //state.status = 'not-authenticated';
            state.data = payload;
        },
        doSetValues: (state, { payload }) => {
            //state.status = 'ready';
            //todo procesamiento de las propiedades
            state.data = payload;
        },
    },
});

export const { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData, doSetValues } = userDataSlice.actions;
