import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { agrolinkApi } from '../api/agrolinkApi';
import { SystemDetailedData, UserSystemData } from '../components/dashboard';

export const DashboardPage = ({ systemsData }) => {
    const [systemsDataValues, setSystemsDataValues] = useState({});
    const [valuesQueryState, setValuesQueryState] = useState('first_load'); //loading, ready, error
    const dataValuesCount = Number(import.meta.env.VITE_DATA_VALUES_COUNT);

    const systemList = [];

    // en systemList se almacena en cada componente del arreglo cada uno de los datos sistema_x
    for (let i = 1; i <= systemsData.cant_sistemas; i++) {
        const systemKey = `sistema_${i}`;
        const system = systemsData[systemKey];
        if (system) {
            systemList.push(system);
        }
    }

    useEffect(() => {
        const getSystemDataValues = async () => {
            try {
                //valuesQueryState !== 'first_time' ? setValuesQueryState('loading') : null;
                const { data } = await agrolinkApi.get(
                    `/sistemas/getData/martinrdrz@hotmail.com?resultsCount=${dataValuesCount}`
                );
                setValuesQueryState('ready');
                setSystemsDataValues(data);
            } catch (error) {
                setValuesQueryState('error');
            }
        };

        getSystemDataValues();
        // Configurar el intervalo para llamar a la API cada 10 segundos
        const intervalId = setInterval(getSystemDataValues, 120000); // 10000 milisegundos = 10 segundos

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    const renderContent = () => {
        if (systemsData.queryState === 'loading' || valuesQueryState == 'first_load') {
            return (
                <Box display='flex' justifyContent='center' alignItems='center' height='20rem'>
                    <CircularProgress size={80} />
                </Box>
            );
        } else if (systemsData.queryState === 'ready' && valuesQueryState == 'ready') {
            return (
                <>
                    <UserSystemData
                        nombre={systemsData.nombre}
                        email={systemsData.email}
                        telefono={systemsData.telefono}
                        cantSistemas={systemsData.cant_sistemas}
                    />
                    {systemList.map((element, index) => (
                        <SystemDetailedData
                            key={index}
                            system={element}
                            systemDataValues={systemsDataValues[`sistema_${index + 1}`]}
                        />
                    ))}
                </>
            );
        } else if (systemsData.queryState === 'error' || valuesQueryState == 'error') {
            return (
                <Typography variant='h6' color='error' marginBottom={2}>
                    Error al cargar los datos. Inténtalo de nuevo más tarde.
                </Typography>
            );
        }
    };

    return (
        <>
            {/* {console.log(systemUserDataValues)} */}
            <Typography variant='h5' marginBottom={2}>
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
