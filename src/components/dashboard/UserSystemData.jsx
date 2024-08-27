import { Typography } from '@mui/material';

export const UserSystemData = ({ nombre, email, telefono, cantSistemas }) => {
    return (
        <>
            <Typography variant="h6" marginBottom={1}>
                Nombre: {nombre}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Email: {email}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Telefono: {telefono}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Sistemas monitoreados: {cantSistemas}
            </Typography>
        </>
    );
};
