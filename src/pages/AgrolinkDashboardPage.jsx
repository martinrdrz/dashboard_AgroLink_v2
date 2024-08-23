import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import { SideBar } from '../components/navbar/SideBar';

const navArrayLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <InboxIcon />,
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Widgets',
        path: '/widgets',
        icon: <GridViewIcon />,
    },
    {
        title: 'Products',
        path: '/products',
        icon: <DraftsIcon />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MenuIcon />,
    },
    {
        title: 'Salir',
        path: '/salir',
        icon: <LogoutIcon />,
    },
];

export const AgrolinkDashboardPage = () => {
    return (
        <>
            <SideBar navArrayLinks={navArrayLinks} />
        </>
    );
};
