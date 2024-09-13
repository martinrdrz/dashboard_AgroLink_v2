import { Box, Card, CardContent, Typography } from '@mui/material';
import { SubsystemDetailedData } from './SubsystemDetailedData';
import { userDataStore } from '../../hooks';

export const SystemDetailedData = ({ sysName }) => {
    const { getSystemData, getSubsystems } = userDataStore();
    const { titulo, subtitulo, tipo } = getSystemData(sysName);
    const subsystemList = getSubsystems(sysName);
    const urlSystem = `/images/${tipo}.png`;

    return (
        <>
            <Card
                sx={{ borderRadius: '16px', border: '1px solid #4CAF50', maxWidth: 400, padding: '8px', marginTop: 2 }}
            >
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Imagen del lado izquierdo */}
                        <Box
                            component="img"
                            src={urlSystem}
                            alt="Aguada"
                            sx={{ width: 50, height: 50, objectFit: 'cover' }}
                        />

                        {/* Texto al lado derecho de la imagen */}
                        <Box sx={{ marginLeft: '16px' }}>
                            <Typography variant="h6" component="div" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                                {titulo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {subtitulo}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Línea verde debajo del contenido */}
                    <Box sx={{ borderBottom: '1px solid #4CAF50', marginTop: 3, marginBottom: 1 }}></Box>

                    {/* Línea verde debajo del contenido */}
                    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                        <Typography variant="body2" color="#4CAF50" sx={{ fontWeight: 'bold' }}>
                            Integrado por:
                        </Typography>
                    </Box>

                    {subsystemList.map((subsysName, index) => (
                        <SubsystemDetailedData key={index} sysName={sysName} subsysName={subsysName} />
                    ))}
                </CardContent>
            </Card>

            {/* <Typography variant='h6' marginTop={5} color='secondary'>
                Sistema: {titulo} - ({subtitulo})
            </Typography>
            <Typography variant='h6' marginBottom={1}>
                Tipo: {tipo}
            </Typography>
            {subsystemList.map((subsysName, index) => (
                <SubsystemDetailedData key={index} sysName={sysName} subsysName={subsysName} />
            ))} */}
        </>
    );
};
