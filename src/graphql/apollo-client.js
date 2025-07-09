import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined", // ✅ SSR optimization
});

export default client;
