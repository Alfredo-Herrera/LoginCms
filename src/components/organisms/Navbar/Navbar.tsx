'use client';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import Logo from '@svgs/Logo';
import Menu from '@svgs/Menu';
import Link from 'next/link';
import { useState } from 'react';
import { navbarData } from './navbarData';

const Navbar = () => {
    const [open, setopen] = useState(false);

    return (
        <header className="relative z-10">
            <nav aria-label="Top">
                <div className="bg-opacity-10 backdrop-blur-md backdrop-filter md:flex flex-row-reverse h-10 px-8 w-full hidden">
                    <div className="flex items-center space-x-6">
                        <Link href={'/login'} passHref legacyBehavior>
                            <a className="text-sm font-medium text-white hover:text-gray-100">
                                Iniciar Sesión
                            </a>
                        </Link>

                        <Link href={'/login'} passHref legacyBehavior>
                            <a className="text-sm font-medium text-white hover:text-gray-100">
                                Crear una Cuenta
                            </a>
                        </Link>
                    </div>
                </div>

                {/* Secondary navigation */}
                <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div>
                            <div className="flex h-16 items-center justify-between">
                                {/* Logo (lg+) */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                    <Link href={'/'}>
                                        <span className="sr-only">
                                            Cuidado con el Perro
                                        </span>
                                        <Logo />
                                    </Link>
                                </div>
                                <Link href={'/'} passHref legacyBehavior>
                                    <a className="lg:hidden">
                                        <Logo />
                                    </a>
                                </Link>

                                <div className="flex flex-1 items-center justify-end">
                                    <div className="flex gap-7">
                                        {navbarData.map((itemNavigation) => {
                                            return (
                                                <li
                                                    className="hover:text-gray-200 hidden text-sm font-medium text-white lg:block"
                                                    key={itemNavigation.title}
                                                >
                                                    <Link
                                                        href={
                                                            itemNavigation.url
                                                        }
                                                    >
                                                        {itemNavigation.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </div>

                                    <div className="flex items-center gap-4 lg:ml-8">
                                        <div className=" flow-root lg:ml-8">
                                            <Link
                                                href="/shopDetail"
                                                passHref
                                                legacyBehavior
                                            >
                                                <a className="group -m-2 flex items-center p-2">
                                                    <ShoppingBagIcon
                                                        className="h-6 w-6 flex-shrink-0 text-white"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-2 text-sm font-medium text-white">
                                                        0
                                                    </span>
                                                    <span className="sr-only">
                                                        items in cart, view bag
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <a
                                            className="navbar-burger self-center lg:hidden"
                                            onClick={() => setopen(!open)}
                                        >
                                            <Menu />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {open && (
                <div className="absolute right-0 w-full max-w-screen-sm mt-2 bg-opacity-10 backdrop-blur-md backdrop-filter text-white rounded-md shadow-lg z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {navbarData.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                passHref
                                legacyBehavior
                            >
                                <a className="flex items-start p-2 rounded-lg hover:bg-color2 focus:bg-color2 focus:outline-none focus:shadow-outline">
                                    <div className="bg-color5 text-white rounded-lg p-3">
                                        {item.icon}
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-semibold">
                                            {item.title}
                                        </p>
                                        <p className="text-sm">
                                            {item.subTitle}
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
