import RouteElement from '../interfaces/route.interface';
import Home from '../pages/home/home';

export const routes: RouteElement[] = [
    {
        name: 'Inicio',
        path: '/',
        component: Home,
        inMenu: true,
    },
];
