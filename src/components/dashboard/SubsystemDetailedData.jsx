import { Box, Typography } from '@mui/material';
import { DetailedData } from './DetailedData';
import { userDataStore } from '../../hooks';

export const SubsystemDetailedData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore();
    const { titulo, tipo, dato_inicial, dato_final, datos: dataList } = getSubsystemData(sysName, subsysName);
    const urlSubsystem = `/images/${tipo}.jpg`;

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Primer fila se muestra icono de subsistema y al lado titulo subsistema*/}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Imagen del lado izquierdo */}
                    <Box
                        component='img'
                        src={urlSubsystem}
                        alt='Molino'
                        sx={{ width: 50, height: 50, objectFit: 'cover' }}
                    />

                    {/* Texto al lado derecho de la imagen */}
                    <Box sx={{ marginLeft: '16px' }}>
                        <Typography variant='body1' color='text.secondary'>
                            {titulo}
                        </Typography>
                    </Box>
                </Box>
                {/* Segunda Fila */}
                {/* //todo: cambiar el siguiente Typography por el componente DetailedData */}
                <Typography variant='body1' marginBottom={2} marginTop={2}>
                    Texto sobre los datos
                </Typography>
                {/* 
                    {dataList.map((dataName, index) => (
                        <DetailedData key={index} sysName={sysName} dataName={dataName} />
                    ))}
                 */}
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
