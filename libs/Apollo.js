import ApolloClient from 'apollo-boost';
import { gql } from '@apollo/client';

import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

export function withApollo(PageComponent) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);
    /*Problem: When ever the query is called multiple instances of the data appear in the console log. 
    I thought I could fix this by simply looking at a single array, but the instances are not other arrays 
    rather they appear to be the same query replicated times the number of items.
*/
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx) => {
    const { AppTree } = ctx;
    const apolloClient = (ctx.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // If on server
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (e) {
        console.error(e);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
}

const isDev = process.env.NODE_ENV !== 'production';
const url = isDev
  ? 'http://localhost:4001'
  : 'https://tracker.scotttolinski.now.sh';

const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    uri: `${url}`,
    fetch,
    cache,
  });
  return client;
};
