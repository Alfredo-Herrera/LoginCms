'use client';

import CardCategory from '@molecules/CardCategory/CardCategory';
import { categoriesDataFacke } from '@molecules/CardCategory/DataFacke';
import CardSectionShop from '@molecules/CardSectionShop/CardSectionShop';
import { collectionsDataFake } from '@molecules/CardSectionShop/fakeData';
import Hero from '@molecules/Hero/Hero';
import HeroInformation from '@molecules/HeroInformation/HeroInformation';

export default function Home() {
    return (
        <div className="bg-white">
            <Hero />
            <main>
                <section
                    aria-labelledby="category-heading"
                    className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
                >
                    <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                        <h2
                            id="category-heading"
                            className="text-2xl font-bold tracking-tight text-gray-900"
                        >
                            Categorías
                        </h2>
                        <a
                            href="#"
                            className="hidden text-sm font-semibold text-color4 hover:text-color5 sm:block"
                        >
                            Explorar todas las categorías
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                                <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                                    {categoriesDataFacke.map((category) => (
                                        <CardCategory
                                            key={category.name}
                                            {...category}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a
                            href="#"
                            className="block text-sm font-semibold text-color4 hover:text-color5"
                        >
                            Explorar todas las categorías
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>

                <HeroInformation
                    title={'Inicia Sesión en Tu Cuenta'}
                    subTitle={
                        'Accede a tus Favoritos y Realiza Compras Más Rápidas. ¡Empieza Aquí!'
                    }
                    textButton={'Iniciar Sessión'}
                    image={
                        'https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg'
                    }
                    href={'/login'}
                />

                <section
                    aria-labelledby="collection-heading"
                    className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
                >
                    <h2
                        id="collection-heading"
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        Explora Nuestras Categorías
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        Encuentra lo que Buscas en Nuestra Amplia Gama de
                        Productos. ¡Comienza a Navegar Ahora!
                    </p>
                    <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                        {collectionsDataFake.map((collection) => (
                            <CardSectionShop
                                {...collection}
                                key={collection.name}
                            />
                        ))}
                    </div>
                </section>

                <HeroInformation
                    title={'¡Conéctate con Nosotros!'}
                    subTitle={
                        '¿Tienes Preguntas o Comentarios? Estamos Aquí para Ayudarte. ¡Contáctanos Hoy Mismo!'
                    }
                    textButton={'¡Contáctanos Ahora!'}
                    image={
                        'https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg'
                    }
                    href={'/contact'}
                />
            </main>
        </div>
    );
}
