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
            if (json?.data?.generateCustomerToken?.token) {
                document.cookie = `token=${json?.data?.generateCustomerToken?.token}`;
            }
            callBack(json);
        });
};
