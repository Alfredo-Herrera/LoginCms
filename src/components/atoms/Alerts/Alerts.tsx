import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    XMarkIcon,
} from '@heroicons/react/20/solid';
import { FC } from 'react';
import { AlertsProps } from './type';

const color = {
    success: {
        bg: 'bg-green-50',
        text: 'text-green-800',
        icon: (
            <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
            />
        ),
        close: {
            bg: 'bg-green-50',
            text: 'text-green-500',
            class: 'hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50',
        },
    },
    error: {
        bg: 'bg-red-50',
        text: 'text-red-800',
        icon: (
            <ExclamationCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
            />
        ),
        close: {
            bg: 'bg-red-50',
            text: 'text-red-500',
            class: 'hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50',
        },
    },
    warning: {
        bg: 'bg-yellow-50',
        text: 'text-yellow-800',
        icon: (
            <ExclamationCircleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
            />
        ),
        close: {
            bg: 'bg-yellow-50',
            text: 'text-yellow-500',
            class: 'hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50',
        },
    },
};

const Alerts: FC<AlertsProps> = ({ status = 'success', text, onClick }) => {
    const colorStatus = color[status] || color.success;
    return (
        <div className={`rounded-md ${colorStatus.bg} p-4`}>
            <div className="flex">
                <div className="flex-shrink-0">{colorStatus.icon}</div>
                <div className="ml-3">
                    <p className={`text-sm font-medium ${colorStatus.text}`}>
                        {text}
                    </p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            onClick={onClick}
                            className={`inline-flex rounded-md ${colorStatus.close.bg} ${colorStatus.close.class} ${colorStatus.close.text}`}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Alerts;
