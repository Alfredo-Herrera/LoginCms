import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new ApolloClient({
    uri: 'https://app.cuidadoconelperro.com.mx/graphql',
    cache: new InMemoryCache(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const MUTATION = gql`
            mutation {
              generateCustomerToken(email: "${email}", password: "${password}") {
                token
              }
            }
        `;
        console.log('🚀 ~ MUTATION:', MUTATION);
        try {
            const data = await client.mutate({ mutation: MUTATION });
            console.log('🚀 ~ data:', data);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    if (req.method === 'GET') {
        res.status(200).json({ mensaje: 'Hola Mundo GET' });
    } else {
        res.status(405).json({ mensaje: 'Método no permitido' }); // 405 Method Not Allowed
    }
}
