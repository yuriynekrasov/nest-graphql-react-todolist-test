import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import './index.css';
import App from './App';

export const cache = new InMemoryCache({});

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
