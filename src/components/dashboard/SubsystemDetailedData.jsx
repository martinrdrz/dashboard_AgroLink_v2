import { Box, Typography } from '@mui/material';
import { DetailedData } from './DetailedData';
import { userDataStore } from '../../hooks';

export const SubsystemDetailedData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore();
    const { titulo, tipo, dato_inicial, dato_final, datos: dataList } = getSubsystemData(sysName, subsysName);
    const urlSubsystemImage = `/images/${tipo}.png`;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                {/* Primer fila se muestra icono de subsistema y al lado titulo subsistema*/}
                <Box
                    sx={{
                        display: 'flex',
                        borderRadius: '16px',
                        alignItems: 'center',
                        backgroundColor: '#f2f1f1',
                        marginBottom: '8px',
                        padding: '3px',
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
                {/* Segunda Fila */}
                {dataList.map((dataName, index) => (
                    <DetailedData key={index} sysName={sysName} dataName={dataName} />
                ))}
            </Box>

            {/* <Typography variant='h6' marginBottom={0} color='secondary'>
                Subsistema: {titulo}
            </Typography>
            <Typography variant='h6' marginBottom={0}>
                Tipo: {tipo}
            </Typography>
            <Typography variant='h6' marginBottom={2}>
                dato_inicial: {dato_inicial}&nbsp;&nbsp;&nbsp; dato_final: {dato_final}
            </Typography>
            {dataList.map((dataName, index) => (
                <DetailedData key={index} sysName={sysName} dataName={dataName} />
            ))} */}
        </>
    );
};

//formato de "subsystem":
// {
//       nombre: "molino norte",
//       tipo: "molino",
//       dato_inicial: 1,
//       dato_final: 2
// }
