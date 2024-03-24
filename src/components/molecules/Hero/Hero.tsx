import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative bg-gray-900">
            <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden"
            >
                <Image
                    src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                    alt="hero imagen"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gray-900 opacity-50"
            />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
                <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
                    Bienvenido a Cuidado con el Perro
                </h1>
                <p className="mt-4 text-xl text-white">
                    Explora Nuestra Colección Exclusiva y Descubre tus Favoritos
                </p>
                <a
                    href="#"
                    className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-color1 hover:text-gray-100"
                >
                    Descubre las Últimas Novedades
                </a>
            </div>
        </div>
    );
};

export default Hero;
