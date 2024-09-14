import { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { userDataStore } from '../../hooks';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ShowChartIcon from '@mui/icons-material/ShowChart';
//import { LineChart, xAxis, yAxis } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts';

export const DetailedData = ({ sysName, dataName }) => {
    const { getData } = userDataStore();
    const { titulo, tipo, unidad, estado_alerta, descripcion_alerta, valores } = getData(sysName, dataName);
    const [open, setOpen] = useState(false); // Estado para abrir o cerrar el diálogo
    const imageData = `/images/${tipo}.png`;
    const lastValue = valores.valores.length > 0 ? valores.valores[valores.valores.length - 1] : 0;
    const preLastValue = valores.valores.length > 1 ? valores.valores[valores.valores.length - 2] : 0;

    //const xAxisData = valores.fechas.map((date) => new Date(date));
    const xAxisData = valores.fechas.map((date) => {
        const formattedDate = new Date(date).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            //year: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });
        return formattedDate;
    });
    const seriesData = valores.valores.map((value) => Number(value));

    // Función para abrir el diálogo
    const handleOpen = () => {
        setOpen(true);
    };

    // Función para cerrar el diálogo
    const handleClose = () => {
        setOpen(false);
    };

    const getArrowIcon = () => {
        //todo
        if (lastValue - preLastValue > 0) {
            return <ArrowUpwardIcon sx={{ fontSize: 25, color: '#FF9800' }} />;
        } else if (lastValue - preLastValue < 0) {
            return <ArrowDownwardIcon sx={{ fontSize: 25, color: '#FF9800' }} />;
        } else {
            return <DragHandleIcon sx={{ fontSize: 25, color: '#FF9800' }} />;
        }
    };

    const visualizeWarning = () => {
        if (Number(estado_alerta) === 1) {
            return (
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
                    <Box
                        component='img'
                        src='/images/warning.gif' // Cambia la ruta de la imagen a tu propia imagen de advertencia
                        alt='Advertencia'
                        sx={{
                            width: 23,
                            height: 23,
                            objectFit: 'cover',
                            marginLeft: '5px',
                            marginRight: '15px',
                        }}
                    />
                    <Typography variant='body1' sx={{ color: 'red', fontSize: '0.8rem' }}>
                        {descripcion_alerta}
                    </Typography>
                </Box>
            );
        } else {
            return null;
        }
    };

    return (
        <>
            <Box
                sx={{
                    borderRadius: '16px',
                    border: '1px solid #4CAF50',
                    maxWidth: 220,
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
                        variant='body1'
                        component='div'
                        sx={{ color: '#FF9800', fontWeight: 'bold', margin: '0px' }}
                    >
                        {titulo}
                    </Typography>
                </Box>

                {/* Segunda fila: Imagen, valor e íconos */}
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0px' }}
                >
                    {/* Imagen del grifo (reemplazar con tu propia imagen) */}
                    <Box
                        component='img'
                        src={imageData} // Cambia la ruta de la imagen a tu propia imagen
                        alt={tipo}
                        sx={{ width: 35, height: 35, objectFit: 'cover' }}
                    />
                    {/* Valor del dato */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant='body1'
                            component='div'
                            sx={{ fontSize: 20 }} // Ajustar el margen derecho del "50"
                        >
                            {lastValue}
                        </Typography>
                        <Typography
                            variant='h5'
                            component='div'
                            sx={{ fontSize: 15, marginLeft: '8px' }} // Asegurarse de que no haya margen izquierdo en "l/s"
                        >
                            {unidad}
                        </Typography>
                    </Box>

                    {/* Iconos de flecha y botón con icono de gráfico */}
                    {getArrowIcon()}

                    {/* Botón rectangular verde con icono ShowChart */}
                    <Button
                        variant='contained'
                        onClick={handleOpen}
                        sx={{
                            backgroundColor: '#4CAF50', // Verde de la gama MUI
                            color: 'white',
                            borderRadius: '8px',
                            minWidth: '25px', // Ancho mínimo para que se vea rectangular
                            minHeight: '25px',
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

                {/* Mensaje de advertencia con imagen de warning */}
                {visualizeWarning()}
            </Box>

            {/* Diálogo para mostrar el gráfico de líneas */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
                <DialogTitle>Historial de Datos</DialogTitle>
                <DialogContent>
                    <Box sx={{ width: '100%', height: 300 }}>
                        <LineChart
                            xAxis={[
                                {
                                    data: xAxisData,
                                    scaleType: 'point', // Especifica que el eje X será de tipo temporal
                                    //labelFormatter: (date) => date.toLocaleDateString('es-ES'), // Formateador
                                    //     const day = date.getDate();
                                    //     const month = date.getMonth() + 1; // Los meses son 0-indexed
                                    //     return `${day}/${month}`;
                                    // },
                                    label: 'Fecha',
                                    tickInterval: 'auto', // Muestra solo algunos ticks, uno cada dos valores
                                },
                            ]}
                            yAxis={[
                                {
                                    label: tipo.charAt(0).toUpperCase() + tipo.slice(1),
                                },
                            ]}
                            series={[
                                {
                                    data: seriesData,
                                    label: tipo.charAt(0).toUpperCase() + tipo.slice(1),
                                    curve: 'linear',
                                    //showMark: false,
                                },
                            ]}
                            grid={{
                                horizontal: true,
                            }}
                            width={500}
                            height={300}
                        />

                        {/* <LineChart
                            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        /> */}
                    </Box>
                </DialogContent>
            </Dialog>

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
