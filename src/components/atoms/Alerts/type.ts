export type AlertsProps = {
    status: 'success' | 'error' | 'warning';
    text: string;
    view?: boolean;
    onClick?: () => void;
};
