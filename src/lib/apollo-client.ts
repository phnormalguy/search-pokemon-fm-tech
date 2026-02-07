import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://graphql-pokemon2.vercel.app/',
});

export const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            pokemon: {
              read(_, { args, toReference }) {
                return toReference({
                  __typename: 'Pokemon',
                  id: args?.id,
                  name: args?.name,
                });
              },
            },
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
      query: {
        fetchPolicy: 'cache-first',
      },
    },
    ssrMode: typeof window === 'undefined',
  });
};

// Global Apollo Client instance for client-side
let apolloClient: ApolloClient<any> | null = null;

export const getApolloClient = () => {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
};
