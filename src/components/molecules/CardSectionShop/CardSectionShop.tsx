import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CardSectionProps } from './type';

const CardSectionShop: FC<CardSectionProps> = ({
    href,
    name,
    imageSrc,
    imageAlt,
    description,
}) => {
    return (
        <Link href={href}>
            <article className="group block">
                <div
                    aria-hidden="true"
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            </article>
        </Link>
    );
};

export default CardSectionShop;
