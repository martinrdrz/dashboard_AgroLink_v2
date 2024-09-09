import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { agrolinkApi } from '../api/agrolinkApi';
import { SystemDetailedData, UserSystemData } from '../components/dashboard';
import { useSelector } from 'react-redux';
import { userDataStore } from '../hooks';

export const DashboardPage = () => {
    const dataValuesCount = Number(import.meta.env.VITE_DATA_VALUES_COUNT);
    const dataValuesIntervalUpdate = Number(import.meta.env.VITE_DATA_VALUES_INTERVAL_UPDATE);
    const { email } = useSelector((state) => state.auth);
    const [valuesQueryState, setValuesQueryState] = useState('first_load'); //state para control carga inicial de valoresde los datos
    const systemList = [];
    const { status: systemsDataState, setValues, getSystems } = userDataStore(); // state es para control carga inicial
    const systemsList = getSystems();

    useEffect(() => {
        const getSystemDataValues = async () => {
            try {
                const { data } = await agrolinkApi.get(`/sistemas/getData/${email}?resultsCount=${dataValuesCount}`);
                setValues(data);
                setValuesQueryState('ready');
                //setSystemsDataValues(data);
            } catch (error) {
                setValuesQueryState('error');
            }
        };

        getSystemDataValues();
        const intervalId = setInterval(getSystemDataValues, dataValuesIntervalUpdate); // 10000 miliseg. = 10 segundos
        return () => clearInterval(intervalId);
    }, []);

    const renderContent = () => {
        if (systemsDataState === 'loading' || valuesQueryState == 'first_load') {
            return (
                <Box display="flex" justifyContent="center" alignItems="center" height="20rem">
                    <CircularProgress size={80} />
                </Box>
            );
        } else if (systemsDataState === 'ready' && valuesQueryState == 'ready') {
            return (
                <>
                    <UserSystemData />
                    {systemsList && systemsList.length > 0
                        ? systemsList.map((sysName, index) => <SystemDetailedData key={index} sysName={sysName} />)
                        : null}
                </>
            );
        } else if (systemsDataState === 'error' || valuesQueryState == 'error') {
            return (
                <Typography variant="h6" color="error" marginBottom={2}>
                    Error al cargar los datos. Inténtalo de nuevo más tarde.
                </Typography>
            );
        }
    };

    return (
        <>
            {/* {console.log(systemUserDataValues)} */}
            <Typography variant="h5" marginBottom={2}>
                Dashboard
            </Typography>
            {renderContent()}
        </>
    );
};

//el valor de "systemsDataValues" es:
// {
//   sistema_1: {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//     ...
//   },
//   sistema_2: {
//     dato_1: [ '-11', '-11', '-22' ],
//     dato_2: [ '0', '0', '4' ]
//    ...
//  }
// }

//El valor de "systemDataValues" es:
//   {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//     ...
//   }
