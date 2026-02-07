import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo-client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

/**
 * Custom App Component
 * Wraps the application with Apollo Provider for GraphQL
 */
export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = getApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Search Pokemon - FM Tech</title>
        <meta name="description" content="Search and explore Pokemon data with GraphQL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
