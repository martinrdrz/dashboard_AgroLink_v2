import { Typography } from '@mui/material';
import React from 'react';
import { userDataStore } from '../../hooks';

export const UserSystemData = () => {
    const { getUserData } = userDataStore(); // state es para control carga inicial
    const { nombre, email, telefono, cant_sistemas } = getUserData();

    return (
        <>
            <Typography variant="h6" marginBottom={1}>
                Nombre: {nombre}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Email: {email}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Telefono: {telefono}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Sistemas monitoreados: {cant_sistemas}
            </Typography>
        </>
    );
};
