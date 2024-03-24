export const postDataLogin = async (
    callBack: (arg0: any) => void,
    data: { email: string; password: string }
) => {
    fetch('/api/login', {
        method: 'POST',
        headers: {
            Store: 'cuidadoconelperro_mx_store_view',
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    })
        .then((response) => response.json())
        .then((json) => {
            console.log('🚀 ~ .then ~ json:', json);
            callBack(json);
        });
};
