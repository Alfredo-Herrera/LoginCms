import Email from '@svgs/Email';
import Home from '@svgs/Home';
import ShopCar from '@svgs/ShopCar';

export const navbarData = [
    {
        title: 'Home',
        url: '/',
        subTitle: 'Regresa al inicio',
        icon: <Home />,
    },
    {
        title: 'Tienda',
        url: '/shop',
        subTitle: 'Visita nuestra tienda',
        icon: <ShopCar />,
    },
    {
        title: 'Contacto',
        url: '/contact',
        subTitle: 'Contactate con nosotros',
        icon: <Email />,
    },
];
