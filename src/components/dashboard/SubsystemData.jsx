import { Box, Typography } from '@mui/material';
import { userDataStore } from '../../hooks';

export const SubsystemData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore();
    const { titulo, tipo } = getSubsystemData(sysName, subsysName);
    const urlSubsystemImage = `/images/${tipo}.png`;

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '16px',
                    backgroundColor: '#f2f1f1',
                    marginBottom: '15px',
                }}
            >
                {/* Imagen del lado izquierdo */}
                <Box
                    component='img'
                    src={urlSubsystemImage}
                    alt={tipo}
                    sx={{ width: 50, height: 50, objectFit: 'cover' }}
                />

                {/* Texto al lado derecho de la imagen */}
                <Box sx={{ marginLeft: '16px' }}>
                    <Typography variant='body1' color='text.secondary' fontWeight='bold'>
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
