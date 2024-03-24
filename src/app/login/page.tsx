'use client';

import ContainerImageForm from '@molecules/ContainerImageForm/ContainerImageForm';
import LoginForm from '@organisms/LoginForm/LoginForm';

export default function Login() {
    return (
        <div className="h-screen flex">
            <ContainerImageForm />
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                <div className="w-full px-8 md:px-32 lg:px-24">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
