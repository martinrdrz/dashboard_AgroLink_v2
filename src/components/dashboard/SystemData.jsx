import { Typography } from '@mui/material';
import { SubsystemData } from './SubsystemData';

export const SystemData = ({ system }) => {
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
            <Typography variant='h6' marginTop={4}>
                Titulo: {system.titulo}
            </Typography>
            <Typography variant='h6' marginBottom={0}>
                Subtitulo: {system.subtitulo}
            </Typography>
            <Typography variant='h6' marginBottom={1}>
                Tipo: {system.tipo}
            </Typography>
            {subsystemList.map((element, index) => (
                <SubsystemData key={index} subsystem={element} />
            ))}
        </>
    );
};
