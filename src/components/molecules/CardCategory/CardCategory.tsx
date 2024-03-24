import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CardCartegoryProps } from './type';

const CardCategory: FC<CardCartegoryProps> = ({ name, href, imageSrc }) => {
    return (
        <Link href={href}>
            <article className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" className="absolute inset-0">
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-cover object-center"
                    />
                </span>
                <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                />
                <span className="relative mt-auto text-center text-xl font-bold text-white">
                    {name}
                </span>
            </article>
        </Link>
    );
};

export default CardCategory;
