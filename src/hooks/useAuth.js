import { agrolinkApi } from '../api/agrolinkApi';
import { useAuthStore } from '../store/useAuthStore';

export const useAuth = () => {
    const status = useAuthStore((state) => state.status);
    const errorMessage = useAuthStore((state) => state.errorMessage);
    const email = useAuthStore((state) => state.email);
    const checking = useAuthStore((state) => state.checking);
    const onLogin = useAuthStore((state) => state.onLogin);
    const onLogout = useAuthStore((state) => state.onLogout);
    //const clearErrorMessage = useAuthStore((state) => state.clearErrorMessage);

    const startLogin = async ({ email, password }) => {
        checking();
        try {
            const { data } = await agrolinkApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            onLogin({
                uid: data.uid,
                name: data.name,
                email: data.email,
                photoURL: data.photoURL ?? null, //devuelve data.photoURL si el mismo existe, caso contrario devuelve null
            });
        } catch (error) {
            onLogout('Credenciales incorrectas');

            //El siguiente codigo es para que se borre el mensaje de "Credenciales incorrectas" luego de un tiempo, pero le da suficiente tiempo para que reacciones la apertura de la ventana de Swal.fire() para mostrar el mensaje anterior, ya que se esta monitoreando el estado de errorMessage.
            setTimeout(() => {
                clearErrorMesage();
            }, 20);
        }
    };

    const startLogout = () => {
        localStorage.clear();
        onLogout();
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return onLogout();
        try {
            const { data } = await agrolinkApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            onLogin({ uid: data.uid, name: data.name, email: data.email });
        } catch (error) {
            localStorage.clear();
            onLogout();
        }
    };

    return {
        //Propierties
        status,
        email,
        errorMessage,
        //Methods
        startLogin,
        startLogout,
        checkAuthToken,
    };
};
