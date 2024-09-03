import { Typography } from '@mui/material';
import { SubsystemDetailedData } from './SubsystemDetailedData';

export const SystemDetailedData = ({ system, systemDataValues }) => {
    const subsystemList = [];

    // en subsystemArray se almacena en cada componente del arreglo cada uno de los datos sistema_x
    for (let i = 1; i <= system.cant_subsistemas; i++) {
        const subsystemKey = `subsistema_${i}`;
        const subsystem = system[subsystemKey];
        if (subsystem) {
            subsystemList.push(subsystem);
        }
    }

    return (
        <>
            <Typography variant="h6" marginTop={5}>
                Titulo: {system.titulo} - ({system.subtitulo})
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Tipo: {system.tipo}
            </Typography>
            {subsystemList.map((element, index) => (
                <SubsystemDetailedData key={index} subsystem={element} systemDataValues={systemDataValues} />
            ))}
        </>
    );
};

//El valor de "systemDataValues" es:
//   {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//     ...
//   }
