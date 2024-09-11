import { Box, Card, CardContent, Typography } from '@mui/material';
import { SubsystemData } from './SubsystemData';
import { userDataStore } from '../../hooks';

export const SystemData = ({ sysName }) => {
    const { getSystemData, getSubsystems } = userDataStore(); // state es para control carga inicial
    const { titulo, subtitulo, tipo } = getSystemData(sysName);
    const subsystemList = getSubsystems(sysName);
    const urlSystem = `/images/${tipo}.jpg`;

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
                    <Box sx={{ borderBottom: '1px solid #4CAF50', marginTop: 3, marginBottom: 2 }}></Box>

                    {subsystemList.map((subsysName, index) => (
                        <SubsystemData key={index} sysName={sysName} subsysName={subsysName} />
                    ))}
                </CardContent>
            </Card>

            {/* <Typography variant="h6" marginTop={4} color="secondary">
                Sistema: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Subtitulo: {subtitulo}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Tipo: {tipo}
            </Typography>
            {subsystemList.map((subsysName, index) => (
                <SubsystemData key={index} sysName={sysName} subsysName={subsysName} />
            ))} */}
        </>
    );
};
