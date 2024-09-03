import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { agrolinkApi } from '../api/agrolinkApi';
import { SystemDetailedData, UserSystemData } from '../components/dashboard';

export const DashboardPage = ({ systemUserData }) => {
    const [systemsUserDataValues, setSystemsUserDataValues] = useState({});
    const [valuesQueryState, setValuesQueryState] = useState('loading'); //loading, ready, error

    const systemList = [];

    // en systemList se almacena en cada componente del arreglo cada uno de los datos sistema_x
    for (let i = 1; i <= systemUserData.cant_sistemas; i++) {
        const systemKey = `sistema_${i}`;
        const system = systemUserData[systemKey];
        if (system) {
            systemList.push(system);
        }
    }

    useEffect(() => {
        const getSystemDataValues = async () => {
            try {
                setValuesQueryState('loading');
                const { data } = await agrolinkApi.get('/sistemas/getData/martinrdrz@hotmail.com?resultsCount=3');
                setValuesQueryState('ready');
                setSystemsUserDataValues(data);
            } catch (error) {
                setValuesQueryState('error');
            }
        };

        getSystemDataValues();
    }, []);

    const renderContent = () => {
        if (systemUserData.queryState === 'loading' || valuesQueryState == 'loading') {
            return (
                <Box display="flex" justifyContent="center" alignItems="center" height="20rem">
                    <CircularProgress size={80} />
                </Box>
            );
        } else if (systemUserData.queryState === 'ready' && valuesQueryState == 'ready') {
            return (
                <>
                    <UserSystemData
                        nombre={systemUserData.nombre}
                        email={systemUserData.email}
                        telefono={systemUserData.telefono}
                        cantSistemas={systemUserData.cant_sistemas}
                    />
                    {systemList.map((element, index) => (
                        <SystemDetailedData
                            key={index}
                            system={element}
                            systemDataValues={systemsUserDataValues[`sistema_${index}`]}
                        />
                    ))}
                </>
            );
        } else if (systemUserData.queryState === 'error' || valuesQueryState == 'error') {
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

//el valor de "systemsUserDataValues" es:
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
