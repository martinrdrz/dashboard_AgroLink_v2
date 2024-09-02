import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const DashboardPage = ({ systemUserData }) => {
    const [systemUserDataValues, setSystemUserDataValues] = useState({});
    const [] = useState('isLoading');

    useEffect(() => {
        const getSystemDataValues = async () => {
            try {
                setSystemUserData({
                    dataState: 'loading',
                });
                const { data } = await agrolinkApi.get('/sistemas/martinrdrz@hotmail.com');
                setSystemUserData({
                    dataState: 'ready',
                    ...data,
                });
            } catch (error) {
                setSystemUserData({
                    dataState: 'error',
                    msg: data.msg,
                });
            }
        };

        getSystemDataValues();
    }, []);

    return (
        <>
            <Typography variant="h5" marginBottom={2}>
                Dashboard
            </Typography>
        </>
    );
};
