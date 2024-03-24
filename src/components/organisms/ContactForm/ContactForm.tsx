'use client';
import Alerts from '@atoms/Alerts/Alerts';
import { AlertsProps } from '@atoms/Alerts/type';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactInputs } from './types';

const ContactForm = () => {
    const [viewAlert, setViewAlert] = useState<AlertsProps>({
        status: 'error',
        text: '',
        view: false,
    });
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<ContactInputs>({});

    const closeAlert = () => {
        setViewAlert({
            status: 'error',
            text: '',
            view: false,
        });
    };

    const onSubmit: SubmitHandler<ContactInputs> = (data) => {
        console.log(data);
        reset();
        setViewAlert({
            status: 'success',
            text: 'El correo fue enviado correctamente',
            view: true,
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Nombre`s
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            id="first-name"
                            autoComplete="given-name"
                            {...register('name', {
                                required: 'El Nombre es obligatorio',
                            })}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color3 sm:text-sm sm:leading-6"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Apellidos
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            id="last-name"
                            {...register('lastName')}
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color3 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required:
                                    'El correo electrónico es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Correo electrónico inválido',
                                },
                            })}
                            autoComplete="email"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color3 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                        <label
                            htmlFor="phone"
                            className="block font-semibold text-gray-900"
                        >
                            Telefono
                        </label>
                        <p id="phone-description" className="text-gray-400">
                            Opcional
                        </p>
                    </div>
                    <div className="mt-2.5">
                        <input
                            type="tel"
                            id="phone"
                            {...register('phone')}
                            autoComplete="tel"
                            aria-describedby="phone-description"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color3 sm:text-sm sm:leading-6"
                        />
                        {errors.phone && (
                            <p className="text-red-400 text-sm">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Motivo
                        </label>
                        <p id="message-description" className="text-gray-400">
                            Maximo 500 caracteres
                        </p>
                    </div>
                    <div className="mt-2.5">
                        <textarea
                            id="message"
                            rows={4}
                            {...register('reason', {
                                required: 'El motivo es obligatorio',
                                maxLength: 500,
                            })}
                            aria-describedby="message-description"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-color3 sm:text-sm sm:leading-6"
                            defaultValue={''}
                        />
                        {errors.reason && (
                            <p className="text-red-400 text-sm">
                                {errors.reason.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                    type="submit"
                    className="rounded-md bg-color4 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-color5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color3"
                >
                    Enviar Mensaje
                </button>
            </div>
            {viewAlert.view && (
                <Alerts
                    status={viewAlert.status}
                    text={viewAlert.text}
                    onClick={closeAlert}
                />
            )}
        </form>
    );
};

export default ContactForm;
