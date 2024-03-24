import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { HeroInformationProps } from './types';

const HeroInformation: FC<HeroInformationProps> = ({
    title,
    subTitle,
    textButton,
    image,
    href,
}) => {
    return (
        <section
            aria-labelledby="comfort-heading"
            className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        >
            <div className="relative overflow-hidden rounded-lg">
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                    <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                        <h2
                            id="comfort-heading"
                            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                        >
                            {title}
                        </h2>
                        <p className="mt-3 text-xl text-white">{subTitle}</p>

                        <Link href={href} passHref legacyBehavior>
                            <a className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
                                {textButton}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroInformation;
