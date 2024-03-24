import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";

// Crear una instancia de ApolloClient
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", // La URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});

// Definir tu consulta GraphQL
const QUERY = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
    }
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Ejecutar la consulta GraphQL
      const { data } = await client.query({ query: QUERY });

      // Enviar la respuesta
      res.status(200).json(data);
    } catch (error) {
      // Manejar el error
      res.status(500).json({ error: "Error al ejecutar la consulta GraphQL" });
    }
  }
  if (req.method === "GET") {
    res.status(200).json({ mensaje: "Hola Mundo GET" });
  } else {
    res.status(405).json({ mensaje: "Método no permitido" }); // 405 Method Not Allowed
  }
}
