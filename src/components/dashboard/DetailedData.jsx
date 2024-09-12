import { Box, Button, Typography } from '@mui/material';
import { userDataStore } from '../../hooks';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export const DetailedData = ({ sysName, dataName }) => {
    const { getData } = userDataStore();
    const { titulo, tipo, unidad, estado_alerta, descripcion_alerta, valores } = getData(sysName, dataName);

    return (
        <>
            <Box
                sx={{
                    borderRadius: '16px',
                    border: '1px solid #4CAF50',
                    maxWidth: 260,
                    padding: '8px',
                    marginBottom: '8px',
                }}
            >
                {/* Título y primera fila */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0px',
                        marginTop: '0px',
                    }}
                >
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ color: '#FF9800', fontWeight: 'bold', margin: '0px' }}
                    >
                        Caudal de agua
                    </Typography>
                </Box>

                {/* Segunda fila: Imagen, valor e íconos */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0px' }}
                >
                    {/* Imagen del grifo (reemplazar con tu propia imagen) */}
                    <Box
                        component="img"
                        src="/images/nivelAgua.jpg" // Cambia la ruta de la imagen a tu propia imagen
                        alt="Caudal"
                        sx={{ width: 40, height: 40, objectFit: 'cover' }}
                    />
                    {/* Valor del caudal */}
                    <Typography variant="body1" component="div" sx={{ fontSize: 20 }}>
                        50
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontSize: 15 }}>
                        l/s
                    </Typography>
                    {/* Iconos de flecha y botón con icono de gráfico */}
                    <ArrowUpwardIcon sx={{ fontSize: 25, color: '#FF9800' }} />
                    {/* Botón rectangular verde con icono ShowChart */}
                    {/* <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#4CAF50', // Verde de la gama MUI
                            color: 'white',
                            borderRadius: '8px',
                            minWidth: '30px', // Ancho mínimo para que se vea rectangular
                            padding: '4px', // Padding para darle el tamaño adecuado
                            fontSize: '10px',
                            '&:hover': {
                                backgroundColor: '#388E3C', // Color verde más oscuro al pasar el mouse
                            },
                        }}
                        startIcon={<ShowChartIcon />}
                    >
                        Datos
                    </Button> */}

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#4CAF50', // Verde de la gama MUI
                            color: 'white',
                            borderRadius: '8px',
                            minWidth: '26px', // Ancho mínimo para que se vea rectangular
                            minHeight: '26px',
                            padding: '0px', // Padding para darle el tamaño adecuado
                            fontSize: '10px',
                            '&:hover': {
                                backgroundColor: '#388E3C', // Color verde más oscuro al pasar el mouse
                            },
                        }}
                    >
                        <ShowChartIcon />
                    </Button>
                </Box>
                {/* //todo: Habilita o desabilitar el warnign segun sea necesario */}
                {/* Mensaje de advertencia con imagen de warning */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                    <Box
                        component="img"
                        src="/images/warning.gif" // Cambia la ruta de la imagen a tu propia imagen de advertencia
                        alt="Advertencia"
                        sx={{ width: 23, height: 23, objectFit: 'cover', marginLeft: '5px', marginRight: '15px' }}
                    />
                    <Typography variant="body1" sx={{ color: 'red', fontSize: '0.8rem' }}>
                        Límite inferior alcanzado.
                    </Typography>
                </Box> */}
            </Box>

            {/* <Typography variant="h6" marginBottom={0}>
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

            <Box display="flex" flexDirection="row" marginBottom={2}>
                {valores.map((valor, index) => (
                    <Typography key={index} variant="body1" marginRight={2}>
                        {valor}
                    </Typography>
                ))}
            </Box> */}
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
