import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SystemData, UserSystemData } from '../components/dashboard';
import { CircularProgress } from '@mui/material';
import { userDataStore } from '../hooks';

export const HomePage = () => {
    const { status: systemsDataState, getSystems } = userDataStore(); // state es para control carga inicial
    const systemsList = getSystems();

    const renderContent = () => {
        switch (systemsDataState) {
            case 'loading':
                return (
                    <Box display='flex' justifyContent='center' alignItems='center' height='20rem'>
                        <CircularProgress size={80} />
                    </Box>
                );

            case 'ready':
                return (
                    <>
                        <UserSystemData />
                        {systemsList && systemsList.length > 0
                            ? systemsList.map((sysName, index) => <SystemData key={index} sysName={sysName} />)
                            : null}
                    </>
                );

            case 'error':
                return (
                    <Typography variant='h6' color='error' marginBottom={2}>
                        Error al cargar los datos. Inténtalo de nuevo más tarde.
                    </Typography>
                );

            default:
                return null; // Por si acaso `queryState` tiene un valor inesperado
        }
    };

    return (
        <>
            <Typography variant='h5' marginBottom={2}>
                Inicio
            </Typography>
            {renderContent()}
        </>
    );
};
