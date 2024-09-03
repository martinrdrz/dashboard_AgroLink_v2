import { Typography } from '@mui/material';

export const SubsystemDetailedData = ({ subsystem, systemDataValues }) => {
    const getDatos = () => {
        {
            let valor = {...subsystem};
            for (let i = subsystem.dato_inicial; i <= subsystem.dato_final; i++) {
                valor.valores = systemDataValues[`dato_${}`];
            }
            return valor.toString();
        }
    };

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
            {getDatos()}
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

//formato de "systemDataValues", continene todos los datos de un sistema particular, por ejemplo "sistema_1"
// {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//   }
