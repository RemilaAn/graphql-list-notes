import './App.css';
import {ListNotesPage} from "./client/pages/list-notes";
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError((gE, nE) => {
    if(gE) {
        console.log("graphQL error");
    }
    if(nE) {
        console.log("Network error");
    }
})
const link = from([errorLink, new HttpLink({uri: 'http://localhost:4000/graphql'})])
const client = new  ApolloClient({
    cache: new InMemoryCache(),
    link
})

function App() {

  return (
      <ApolloProvider client={client}>
    <div className="App">
      <ListNotesPage />
    </div>
          </ApolloProvider>
  );
}

export default App;
