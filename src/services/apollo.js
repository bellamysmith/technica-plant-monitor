import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

const URI = process.env.REACT_APP_GRAPHQL_URI;

export const customFetch = async (uri, options) => {
  options.headers["x-api-key"] = process.env.REACT_APP_API_KEY;
  return fetch(uri, options);
};

export default new ApolloClient({
  link: new HttpLink({
    uri: URI,
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
});