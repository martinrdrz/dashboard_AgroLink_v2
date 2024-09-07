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
            //todo procesamiento de las propiedades
            //console.log(state.data.cant_sistemas);
            for (let i = 1; i <= state.data.cant_sistemas; i++) {
                const sysKey = `sistema_${i}`;
                const dataCount = state.data[sysKey].cant_datos;
                //console.log(dataCount);
                for (let j = 1; j <= dataCount; j++) {
                    const dataKey = `dato_${j}`;
                    //state.data[sysKey][dataKey].values = [10, 20, 30];
                    state.data[sysKey][dataKey].valores = payload[sysKey][dataKey];
                }
            }
        },
    },
});

export const { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData, doSetValues } = userDataSlice.actions;

//el parametro "dataValues" de la funcion doSetValues tiene el formatos:
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
