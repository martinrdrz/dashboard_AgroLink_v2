import { useDispatch, useSelector } from 'react-redux';
import { agrolinkApi } from '../api/agrolinkApi';
import { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData, doSetValues } from '../store';

export const userDataStore = () => {
    const { status } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    const getUserData = () => {
        const nombre = useSelector((state) => state.userData.data?.nombre);
        const email = useSelector((state) => state.userData.data?.email);
        const telefono = useSelector((state) => state.userData.data?.telefono);
        const cant_sistemas = useSelector((state) => state.userData.data?.cant_sistemas);
        return { nombre, email, telefono, cant_sistemas };
    };

    const getSystems = () => {
        const systemsCount = useSelector((state) => state.userData.data?.cant_sistemas);
        const systemList = [];
        for (let i = 1; i <= systemsCount; i++) {
            const systemKey = `sistema_${i}`;
            systemList.push(systemKey);
        }
        return systemList;
    };

    const getSystemData = (sysName) => {
        const titulo = useSelector((state) => state.userData.data[sysName]?.titulo);
        const subtitulo = useSelector((state) => state.userData.data[sysName]?.subtitulo);
        const tipo = useSelector((state) => state.userData.data[sysName]?.tipo);
        return { titulo, subtitulo, tipo };
    };

    const getSubsystems = (sysName) => {
        const subsystemsCount = useSelector((state) => state.userData.data[sysName].cant_subsistemas);
        const subsystemList = [];
        for (let i = 1; i <= subsystemsCount; i++) {
            const subsystemKey = `subsistema_${i}`;
            subsystemList.push(subsystemKey);
        }
        return subsystemList;
    };

    const getSubsystemData = (sysName, subsysName) => {
        const subsystemData = useSelector((state) => state.userData.data[sysName][subsysName]);

        //console.log(subsystemData);
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
        const data = useSelector((state) => state.userData.data[sysName][dataName]);
        return data;
    };

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

//el parametro "dataValues" de la funcion setValues tiene el formatos:
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
