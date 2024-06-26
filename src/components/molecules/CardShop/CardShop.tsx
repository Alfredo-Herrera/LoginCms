import Image from 'next/image';
import { FC } from 'react';
import { CardShopProps } from './type';

const CardShop: FC<CardShopProps> = ({
    imageSrc,
    imageAlt,
    name,
    color,
    price,
    href,
}) => {
    return (
        <article>
            <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                        {name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                        {price}
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <a
                    href={href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                    Agregar al Carrito<span className="sr-only">, {name}</span>
                </a>
            </div>
        </article>
    );
};

export default CardShop;
