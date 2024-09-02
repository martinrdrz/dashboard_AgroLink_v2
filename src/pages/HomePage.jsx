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

    return (
        <>
            <Typography variant="h5" marginBottom={2}>
                Inicio
            </Typography>
            {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>texto a renderizar</Box> */}
            {systemUserData.queryState == 'loading' ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="20rem">
                    <CircularProgress size={80} />
                </Box>
            ) : (
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
            )}
        </>
    );
};
