import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new ApolloClient({
    uri: process.env.URL_LOGIN,
    cache: new InMemoryCache(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { email = 'eduper11@yopmail.com', password = 'Hanzo11.' } =
            req.body;

        console.log('🚀 ~ password:', password);
        console.log('🚀 ~ email:', email);
        const MUTATION = gql`
            mutation generateCustomerToken(
                $email: String!
                $password: String!
            ) {
                generateCustomerToken(email: $email, password: $password) {
                    token
                }
            }
        `;

        try {
            const data = await client.mutate({
                mutation: MUTATION,
                variables: {
                    email: email,
                    password: password,
                },
            });
            console.log('🚀 ~ data:', data);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    } else if (req.method === 'GET') {
        res.status(200).json({ mensaje: 'Hola Mundo GET' });
        return;
    } else {
        res.status(405).json({ mensaje: 'Método no permitido' }); // 405 Method Not Allowed
    }
}
