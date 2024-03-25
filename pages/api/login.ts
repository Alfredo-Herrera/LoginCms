import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const rawBody = await buffer(req);
        const body = JSON.parse(rawBody.toString());

        const { email, password } = body;
        const bodyMutation = JSON.stringify({
            query: `mutation {
                generateCustomerToken(email: "${email}", password: "${password}") {
                    token
                }
            }`,
        });

        if (email && password) {
            try {
                fetch(process.env.URL_LOGIN || '', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Store: 'cuidadoconelperro_mx_store_view',
                    },
                    body: bodyMutation,
                })
                    .then((response) => response.json())
                    .then((json) => {
                        res.status(200).json(json);
                    });
            } catch (error) {
                res.status(500).json({ error: error });
            }
        }
    } else if (req.method === 'GET') {
        res.status(200).json({ mensaje: 'Hola Mundo GET' });
        return;
    } else {
        res.status(405).json({ mensaje: 'Método no permitido' }); // 405 Method Not Allowed
    }
}
