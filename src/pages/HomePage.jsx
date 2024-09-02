import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SystemData, UserSystemData } from '../components/dashboard';
import { CircularProgress } from '@mui/material';

export const HomePage = ({ systemUserData }) => {
    const systemArray = [];

    // en systemArray se almacena en cada componente del arreglo cada uno de los datos sistema_x
    for (let i = 1; i <= systemUserData.cant_sistemas; i++) {
        const systemKey = `sistema_${i}`;
        const system = systemUserData[systemKey];
        if (system) {
            systemArray.push(system);
        }
    }

    const renderContent = () => {
        switch (systemUserData.queryState) {
            case 'loading':
                return (
                    <Box display="flex" justifyContent="center" alignItems="center" height="20rem">
                        <CircularProgress size={80} />
                    </Box>
                );

            case 'ready':
                return (
                    <>
                        <UserSystemData
                            nombre={systemUserData.nombre}
                            email={systemUserData.email}
                            telefono={systemUserData.telefono}
                            cantSistemas={systemUserData.cant_sistemas}
                        />
                        {systemArray.map((element, index) => (
                            <SystemData key={index} system={element} />
                        ))}
                    </>
                );

            case 'error':
                return (
                    <Typography variant="h6" color="error" marginBottom={2}>
                        Error al cargar los datos. Inténtalo de nuevo más tarde.
                    </Typography>
                );

            default:
                return null; // Por si acaso `queryState` tiene un valor inesperado
        }
    };

    return (
        <>
            <Typography variant="h5" marginBottom={2}>
                Inicio
            </Typography>
            {renderContent()}
        </>
    );
};
