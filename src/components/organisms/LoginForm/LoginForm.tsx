import { SubmitHandler, useForm } from 'react-hook-form';

import { postDataLogin } from '@helper/help';
import { useState } from 'react';
import Alerts from '../../atoms/Alerts/Alerts';
import { AlertsProps } from '../../atoms/Alerts/type';
import { LoginInputs } from './types';

const LoginForm = () => {
    const [viewAlert, setViewAlert] = useState<AlertsProps>({
        status: 'error',
        text: '',
        view: false,
    });
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginInputs>({});

    const setLogin = (data: any) => {
        console.log('🚀 ~ setLogin ~ data:', data);
        if (data.error) {
            setViewAlert({
                status: 'error',
                text: data.error,
                view: true,
            });
        } else {
            setViewAlert({
                status: 'success',
                text: 'El Inicio de sesión fue correcto',
                view: true,
            });
        }
    };

    const closeAlert = () => {
        setViewAlert({
            status: 'error',
            text: '',
            view: false,
        });
    };

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        console.log(data);
        postDataLogin(setLogin, {
            // email: 'eduper11@yopmail.com',
            // password: 'Hanzo11.',
            email: 'jeperez@agarcia.com.mx',
            password: 'M@ttd0m1',
        });
    };

    return (
        <>
            <form
                className="bg-white rounded-md shadow-2xl p-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-gray-800 font-bold text-2xl mb-1">
                    ¡Hola de nuevo!
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-8">
                    Bienvenido
                </p>
                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    <input
                        id="email"
                        className=" pl-2 w-full outline-none border-none text-gray-800"
                        type="email"
                        placeholder="Email"
                        {...register('user', {
                            required: 'El correo electrónico es obligatorio',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Correo electrónico inválido',
                            },
                        })}
                    />
                </div>
                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <input
                        className="pl-2 w-full outline-none border-none text-gray-800"
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register('password', {
                            required: 'La contraseña es obligatoria',
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s]).*$/,
                                message:
                                    'La contraseña debe tener al menos una letra mayúscula, un número y un carácter especial',
                            },
                        })}
                    />
                </div>
                {errors.password && (
                    <p className="text-red-400">{errors.password.message}</p>
                )}
                <button
                    type="submit"
                    className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                    Iniciar sesión
                </button>
                <div className="flex justify-between mt-4">
                    <span className="text-sm ml-2 text-gray-800 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                        ¿Olvidó su contraseña?
                    </span>
                    <a
                        href="#"
                        className="text-sm ml-2 text-gray-800 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                    >
                        ¿Aún no tienes una cuenta?
                    </a>
                </div>
            </form>
            {viewAlert.view && (
                <Alerts
                    status={viewAlert.status}
                    text={viewAlert.text}
                    onClick={closeAlert}
                />
            )}
        </>
    );
};

export default LoginForm;
