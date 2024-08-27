import { Typography } from '@mui/material';

export const SubsystemData = ({ subsystem }) => {
    return (
        <>
            <Typography variant='h6' marginBottom={0}>
                Subsistema: {subsystem.nombre}
            </Typography>
            <Typography variant='h6' marginBottom={0}>
                Tipo: {subsystem.tipo}
            </Typography>
        </>
    );
};
