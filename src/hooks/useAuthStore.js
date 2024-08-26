import { useDispatch, useSelector } from 'react-redux';
import { agrolinkApi } from '../api/agrolinkApi';
import { checking, clearErrorMesage, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
    //const { status, uid, name, email, photoURL, errorMessage } = useSelector((state) => state.auth);
    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(checking());
        try {
            const { data } = await agrolinkApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(
                onLogin({
                    uid: data.uid,
                    name: data.name,
                    email: data.email,
                    photoURL: data.photoURL ?? null, //devuelve data.photoURL si el mismo existe, caso contrario devuelve null
                })
            );
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            //El siguiente codigo es para que se borre el mensaje de "Credenciales incorrectas" luego de un tiempo, pero le da suficiente tiempo para que reacciones la apertura de la ventana de Swal.fire() para mostrar el mensaje anterior, ya que se esta monitoreando el estado de errorMessage.
            setTimeout(() => {
                dispatch(clearErrorMesage());
            }, 20);
        }
    };

    const startLogout = () => {
        localStorage.clear();
        //dispatch(onLogoutCalendar());
        dispatch(onLogout());
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());
        try {
            const { data } = await agrolinkApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ uid: data.uid, name: data.name, email: data.email }));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    };

    return {
        //Propiedades
        status,
        errorMessage,
        //uid,
        //name,
        //email,
        //photoURL,

        //Metodos
        startLogin,
        //startRegister,
        checkAuthToken,
        startLogout,
    };
};
