import { Typography } from '@mui/material';
import { SubsystemData } from './SubsystemData';
import { userDataStore } from '../../hooks';

export const SystemData = ({ sysName }) => {
    const { getSystemData, getSubsystems } = userDataStore(); // state es para control carga inicial
    const { titulo, subtitulo, tipo } = getSystemData(sysName);
    const subsystemList = getSubsystems(sysName);

    return (
        <>
            <Typography variant="h6" marginTop={4} color="secondary">
                Sistema: {titulo}
            </Typography>
            <Typography variant="h6" marginBottom={0}>
                Subtitulo: {subtitulo}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Tipo: {tipo}
            </Typography>
            {subsystemList.map((subsysName, index) => (
                <SubsystemData key={index} sysName={sysName} subsysName={subsysName} />
            ))}
        </>
    );
};
