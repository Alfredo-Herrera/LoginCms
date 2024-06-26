'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="relative h-screen">
            <Image
                src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                alt="404 image"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8 text-white">
                    404
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Pagina no encontrada
                </h1>
                <p className="mt-4 text-base text-white/70 sm:mt-6">
                    Lo sentimos, no pudimos encontrar la página que estás
                    buscando.{' '}
                </p>
                <div className="mt-10 flex justify-center">
                    <Link href={'/'} passHref legacyBehavior>
                        <a className="text-sm font-semibold leading-7 text-white">
                            <span aria-hidden="true">&larr;</span> Home
                        </a>
                    </Link>
                </div>
            </div>
        </main>
    );
}
