import { Typography } from '@mui/material';

export const SubsystemDetailedData = ({ subsystem, systemDataValues }) => {
    return (
        <>
            <Typography variant="h6" marginBottom={0}>
                Subsistema: {subsystem.nombre}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Tipo: {subsystem.tipo}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                dato_inicial: {subsystem.dato_inicial}&nbsp;&nbsp;&nbsp; dato_final: {subsystem.dato_final}
            </Typography>
            {/* {for (let i = 1; i <= systemUserData.cant_sistemas; i++) {
                
            }} */}
        </>
    );
};

//formato de "systemDataValues"
// {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//   }
