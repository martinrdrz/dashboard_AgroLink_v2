import { Box, Typography } from '@mui/material';

export const DetailedData = ({ data }) => {
    return (
        <>
            <Typography variant="h6" marginBottom={0}>
                Dato titulo: {data.titulo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato tipo: {data.tipo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato Unidad: {data.unidad}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato alerta estado: {data.estado_alerta}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Dato descripcion alerta: {data.descripcion_alerta}
            </Typography>
            {/* Iteramos sobre data.valores para mostrar cada valor */}
            <Box marginBottom={2}>
                {data.valores.map((valor, index) => (
                    <Typography key={index} variant="body1">
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
