import { Typography } from '@mui/material';

export const SystemData = ({ data }) => {
    return (
        <>
            <Typography variant="h6" marginBottom={2}>
                {data.titulo}
            </Typography>
        </>
    );
};
