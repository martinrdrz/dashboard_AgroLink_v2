import { useDispatch, useSelector } from 'react-redux';
import { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData, doSetValues } from '../store';

export const userDataStore = () => {
    const { status } = useSelector((state) => state.userData);
    const systemsData = useSelector((state) => state.userData.data);
    const systemsDataValues = useSelector((state) => state.userData.values);
    const dispatch = useDispatch();

    const getUserData = () => {
        return {
            nombre: systemsData?.nombre,
            email: systemsData?.email,
            telefono: systemsData?.telefono,
            cant_sistemas: systemsData?.cant_sistemas,
        };
    };

    const getSystems = () => {
        const systemsCount = systemsData?.cant_sistemas;
        const systemList = [];
        for (let i = 1; i <= systemsCount; i++) {
            const systemKey = `sistema_${i}`;
            systemList.push(systemKey);
        }
        return systemList;
    };

    const getSystemData = (sysName) => {
        const titulo = systemsData[sysName]?.titulo;
        const subtitulo = systemsData[sysName]?.subtitulo;
        const tipo = systemsData[sysName]?.tipo;
        return { titulo, subtitulo, tipo };
    };

    const getSubsystems = (sysName) => {
        const subsystemsCount = systemsData?.[sysName].cant_subsistemas;
        const subsystemList = [];
        for (let i = 1; i <= subsystemsCount; i++) {
            const subsystemKey = `subsistema_${i}`;
            subsystemList.push(subsystemKey);
        }
        return subsystemList;
    };

    const getSubsystemData = (sysName, subsysName) => {
        const subsystemData = systemsData?.[sysName][subsysName];
        if (!subsystemData) {
            return '';
        }
        const datosList = [];
        for (let i = subsystemData.dato_inicial; i <= subsystemData.dato_final; i++) {
            datosList.push(`dato_${i}`);
        }
        return {
            titulo: subsystemData.titulo,
            tipo: subsystemData.tipo,
            dato_inicial: subsystemData.dato_inicial,
            dato_final: subsystemData.dato_final,
            datos: datosList,
        };
    };

    const getData = (sysName, dataName) => {
        const data = systemsData?.[sysName][dataName];
        const dataWithValues = { ...data, valores: systemsDataValues?.[sysName][dataName] };
        return dataWithValues;
    };
    //El dato devuelto, "dataWithValues", tiene el siguiente formato:
    //     {
    //       "descripcion_alerta": "Molino posiblemente con problemas",
    //       "estado_alerta": 1,
    //       "tipo": "estado",
    //       "titulo": "Estado",
    //       "unidad": ""
    //       "valores": {
    //              "valores": [10,20,30],
    //              "fechas": ["2024-04-26T20:23:45Z", "2024-05-20T20:31:27Z", "2024-08-26T13:08:44Z"]
    //}
    //     },

    const setAllData = (systemsData) => {
        dispatch(doSetAllData(systemsData));
    };

    const setValues = (dataValues) => {
        dispatch(doSetValues(dataValues));
    };

    const setReadyState = () => {
        dispatch(doSetReadyState());
    };

    const setLoadingState = () => {
        dispatch(doSetLoadingState());
    };

    const setErrorState = () => {
        dispatch(doSetErrorState());
    };

    return {
        //Propiedades
        status,

        //Metodos
        getUserData,
        getSystems,
        getSystemData,
        getSubsystems,
        getSubsystemData,
        getData,
        setAllData,
        setValues,
        setReadyState,
        setLoadingState,
        setErrorState,
    };
};

//El formato de "systemsData" es:
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

//El formato de  "systemsDataValues" es:
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
