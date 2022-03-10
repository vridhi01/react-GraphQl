import Home from './Pages/home'
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
       <Home/>
    </ApolloProvider>
  );
}

export default App;
