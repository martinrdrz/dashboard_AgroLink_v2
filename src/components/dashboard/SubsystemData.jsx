import { Typography } from '@mui/material';
import { userDataStore } from '../../hooks';

export const SubsystemData = ({ sysName, subsysName }) => {
    const { getSubsystemData } = userDataStore(); // state es para control carga inicial
    const { titulo, tipo } = getSubsystemData(sysName, subsysName);

    return (
        <>
            <Typography variant="h6" marginBottom={0}>
                Subsistema: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                Tipo: {tipo}
            </Typography>
        </>
    );
};
