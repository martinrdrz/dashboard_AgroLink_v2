import { Typography } from '@mui/material';

export const SubsystemData = ({ subsystemType }) => {
    return (
        <Typography variant="h6" marginBottom={0}>
            Subsistema: {subsystemType}
        </Typography>
    );
};
