import { Typography } from '@mui/material';
import { SubsystemDetailedData } from './SubsystemDetailedData';

export const SystemDetailedData = ({ system, systemDataValues }) => {
    const subsystemList = [];

    // en subsystemList se almacena en cada componente del arreglo cada uno de los datos sistema_x
    for (let i = 1; i <= system.cant_subsistemas; i++) {
        const subsystemKey = `subsistema_${i}`;
        const subsystem = system[subsystemKey];
        if (subsystem) {
            subsystemList.push(subsystem);
        }
    }

    return (
        <>
            <Typography variant='h6' marginTop={5} color='secondary'>
                Sistema: {system.titulo} - ({system.subtitulo})
            </Typography>
            <Typography variant='h6' marginBottom={1}>
                Tipo: {system.tipo}
            </Typography>
            {subsystemList.map((element, index) => (
                <SubsystemDetailedData
                    key={index}
                    subsystem={element}
                    systemData={system}
                    systemDataValues={systemDataValues}
                />
            ))}
        </>
    );
};

// El valor de "system" es:
//   {
//     "canal_1": "1687674",
//     "cant_canales_asignados": 1,
//     "cant_datos": 4,
//     "cant_subsistemas": 2,
//     "readAPIkey_1": "K0118S8SRR1ZNXK1",
//     "subtitulo": "Bebedero sobre parcela norte",
//     "tipo": "bebedero",
//     "titulo": "Bebedero Vacas",
//     "dato_1": {
//       "descripcion_alerta": "Molino posiblemente con problemas",
//       "estado_alerta": 1,
//       "tipo": "estado",
//       "titulo": "Estado",
//       "unidad": ""
//     },
//     "dato_2": {
//       "descripcion_alerta": "Molino con poca agua de salida",
//       "estado_alerta": 0,
//       "tipo": "caudal",
//       "titulo": "Caudal",
//       "unidad": "l/s"
//     },
//     "dato_3": {
//       "descripcion_alerta": "Tanque con poca agua",
//       "estado_alerta": 0,
//       "tipo": "nivel",
//       "titulo": "Nivel agua",
//       "unidad": "%"
//     },
//     "dato_4": {
//       "descripcion_alerta": "Temperatura del agua muy alta",
//       "estado_alerta": 0,
//       "tipo": "temperatura",
//       "titulo": "Temperatura",
//       "unidad": "°C"
//     },
//     "subsistema_1": {
//       "nombre": "molino norte",
//       "tipo": "molino",
//       "dato_inicial": 1,
//       "dato_final": 2
//     },
//     "subsistema_2": {
//       "nombre": "tanque norte",
//       "tipo": "tanque",
//       "dato_inicial": 3,
//       "dato_final": 4
//     },
//   }

//El valor de "systemDataValues" es:
//   {
//     dato_1: [ '21', '26', '50' ],
//     dato_2: [ '-16', '-15', '60' ],
//     dato_3: [ '-30', '-56', '70' ],
//     dato_4: [ '6', '-4', '80' ]
//     ...
//   }
