import About from "@svgs/About";
import Email from "@svgs/Email";
import Home from "@svgs/Home";
import ShopCar from "@svgs/ShopCar";

export const navbarData = [
  {
    title: "Home",
    url: "/",
    subTitle: "Regresa al inicio",
    icon: <Home />,
  },
  {
    title: "Nosotros",
    url: "/about",
    subTitle: "Conoce nuestra pagina",
    icon: <About />,
  },
  {
    title: "Tienda",
    url: "/shop",
    subTitle: "Visita nuestra tienda",
    icon: <ShopCar />,
  },
  {
    title: "Contacto",
    url: "/contact",
    subTitle: "Contactate con nosotros",
    icon: <Email />,
  },
];
