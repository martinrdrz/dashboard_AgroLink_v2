//sirve para mantener la infromacion del Usuario Logueado.

import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        status: 'loading', //loading, ready, error
        data: null,
        values: null,
    },
    reducers: {
        doSetReadyState: (state) => {
            state.status = 'ready';
        },
        doSetLoadingState: (state) => {
            state.status = 'loading';
        },
        doSetErrorState: (state) => {
            state.status = 'error';
        },
        doSetAllData: (state, { payload }) => {
            state.data = payload;
        },
        doSetValues: (state, { payload }) => {
            state.values = payload;
        },
    },
});

export const { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData, doSetValues } = userDataSlice.actions;

//values del store tiene el formato:
// {
//   sistema_1: {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//     ...
//   },
//   sistema_2: {
//     dato_1: [ '-11', '-11', '-22' ],
//     dato_2: [ '0', '0', '4' ]
//    ...
//  }
// }
