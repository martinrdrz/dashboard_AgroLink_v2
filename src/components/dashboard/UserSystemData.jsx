import { Avatar, Box, Card, CardContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { userDataStore } from '../../hooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SettingsIcon from '@mui/icons-material/Settings';

export const UserSystemData = () => {
    const { getUserData } = userDataStore(); // state es para control carga inicial
    const { nombre, email, telefono, cant_sistemas } = getUserData();

    return (
        <>
            <Box
                sx={{
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    border: '1px solid #ccc',
                    backgroundColor: '#fff',
                    maxWidth: 400,
                    display: 'flex',
                    flexDirection: 'row', // Para colocar las filas una debajo de la otra
                    gap: 1, // Espaciado entre las filas
                }}
            >
                <PersonIcon sx={{ fontSize: 48, color: '#f5b942', mt: 0 }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant='h6' component='div' fontWeight='bold' mt={1}>
                        {nombre}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <EmailIcon sx={{ color: 'green' }} />
                        <Typography variant='body2'>{email}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <PhoneIcon sx={{ color: 'red' }} />
                        <Typography variant='body2'>{telefono}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <SettingsIcon sx={{ color: 'gray' }} />
                        <Typography variant='body2'>
                            {cant_sistemas} {cant_sistemas === 1 ? 'sistema' : 'sistemas'}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* <Typography variant="h6" marginBottom={1}>
                Nombre: {nombre}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Email: {email}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Telefono: {telefono}
            </Typography>
            <Typography variant="h6" marginBottom={1}>
                Sistemas monitoreados: {cant_sistemas}
            </Typography> */}
        </>
    );
};
