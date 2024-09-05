import { useDispatch, useSelector } from 'react-redux';
import { agrolinkApi } from '../api/agrolinkApi';
import { doSetReadyState, doSetLoadingState, doSetErrorState, doSetAllData } from '../store';

export const userDataStore = () => {
    //const { status, uid, name, email, photoURL, errorMessage } = useSelector((state) => state.auth);
    const { status } = useSelector((state) => state.userData);
    const dispatch = useDispatch();

    // const getUserDataState = () => {
    //     return useSelector((state) => state.userData.status);
    // };

    const getUserData = () => {
        return useSelector((state) => {
            const { data } = state.userData;
            if (!data) return {};
            const { nombre, email, telefono, cant_sistemas } = data;
            return { nombre, email, telefono, cant_sistemas };
        });
    };

    const getSystems = () => {
        //todo
        const systemsData = useSelector((state) => state.userData.data);
        const systemList = [];

        // en systemList se almacena en cada componente del arreglo cada uno de los datos sistema_x
        for (let i = 1; i <= systemsData.cant_sistemas; i++) {
            const systemKey = `sistema_${i}`;
            const system = systemsData[systemKey];
            if (system) {
                systemList.push(system);
            }
        }
        return systemList;
    };

    const getSubsystems = (sysIndex) => {
        //todo
        const systemData = useSelector((state) => state.userData.data[`sistema_${sysIndex}`]);
        const subsystemList = [];

        // en subsystemList se almacena en cada componente del arreglo cada uno de los datos sistema_x
        for (let i = 1; i <= systemData.cant_subsistemas; i++) {
            const subsystemKey = `subsistema_${i}`;
            const subsystem = systemData[subsystemKey];
            if (subsystem) {
                subsystemList.push(subsystem);
            }
        }
        return subsystemList;
    };

    const getData = (sysIndex, subsysIndex) => {
        const { dato_inicial, dato_final } = useSelector(
            (state) => state.userData.data[`sistema_${sysIndex}`][`subsistema_${subsysIndex}`]
        );
        const systemData = useSelector((state) => state.userData.data[`sistema_${sysIndex}`]);
        const dataList = [];

        // en dataList se almacena en cada componente de la lista el objeto correspondiente a "dato_x" que ya tiene incluida la propiedad "values" con la lista de valores para dicho "dato_x".
        for (let i = dato_inicial; i <= dato_final; i++) {
            const dataKey = `dato_${i}`;
            const data = systemData[dataKey];
            if (data) {
                dataList.push(data);
            }
        }
        return dataList;
    };

    const setAllData = (systemsData) => {
        //todo
        dispatch(doSetAllData(systemsData));
    };

    const setValues = () => {
        //todo
        console.log('----- Entre en setValues -------');
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
        getSubsystems,
        getData,
        setAllData,
        setValues,
        setReadyState,
        setLoadingState,
        setErrorState,
    };
};
