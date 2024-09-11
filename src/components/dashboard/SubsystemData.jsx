import { Box, Typography } from '@mui/material';
import { userDataStore } from '../../hooks';

export const SubsystemData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore();
    const { titulo, tipo } = getSubsystemData(sysName, subsysName);
    const urlSubsystem = `/images/${tipo}.jpg`;

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Imagen del lado izquierdo */}
                <Box
                    component="img"
                    src={urlSubsystem}
                    alt="Molino"
                    sx={{ width: 50, height: 50, objectFit: 'cover' }}
                />

                {/* Texto al lado derecho de la imagen */}
                <Box sx={{ marginLeft: '16px' }}>
                    <Typography variant="body1" color="text.secondary">
                        {titulo}
                    </Typography>
                </Box>
            </Box>

            {/* <Typography variant="h6" marginBottom={0}>
                Subsistema: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                Tipo: {tipo}
            </Typography> */}
        </>
    );
};
