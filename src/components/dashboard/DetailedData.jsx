import { Box, Typography } from '@mui/material';
import { userDataStore } from '../../hooks';

export const DetailedData = ({ sysName, dataName }) => {
    const { getData } = userDataStore();
    const { titulo, tipo, unidad, estado_alerta, descripcion_alerta, valores } = getData(sysName, dataName);
    // console.log(`--- ${titulo} ---`);
    // console.log(`--- ${tipo} ---`);
    // console.log(`--- ${unidad} ---`);
    // console.log(`--- ${estado_alerta} ---`);
    // console.log(`--- ${descripcion_alerta} ---`);
    // console.log(`--- ${valores} ---`);

    return (
        <>
            <Typography variant="h6" marginBottom={0}>
                Dato titulo: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato tipo: {tipo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato Unidad: {unidad}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato alerta estado: {estado_alerta}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato descripcion alerta: {descripcion_alerta}
            </Typography>
            {/* Iteramos sobre data.valores para mostrar cada valor */}
            <Box display="flex" flexDirection="row" marginBottom={2}>
                {valores.map((valor, index) => (
                    <Typography key={index} variant="body1" marginRight={2}>
                        {valor}
                    </Typography>
                ))}
            </Box>
        </>
        //todo
    );
};

//formato de "data":
//     {
//       "descripcion_alerta": "Molino posiblemente con problemas",
//       "estado_alerta": 1,
//       "tipo": "estado",
//       "titulo": "Estado",
//       "unidad": ""
//       "valores": [ '21', '26', '50' ]
//     },
