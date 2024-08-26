import { Typography } from '@mui/material';

export const UserSystemData = ({ nombre, email, telefono, cantSistemas }) => {
    return (
        <>
            <Typography variant="h6" marginBottom={2}>
                Nombre: {nombre}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                Email: {email}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                Telefono: {telefono}
            </Typography>
            <Typography variant="h6" marginBottom={2}>
                Sistemas monitoreados: {cantSistemas}
            </Typography>
        </>
    );
};
