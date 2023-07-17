import {ApolloServer} from "apollo-server";
import {typeDefs} from "./schema.mjs";
import {resolvers} from "./resolvers.mjs";

// https://www.youtube.com/watch?v=EgVpTwpbeU4
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: 4000}).then((url) => {
    console.log(`Server is ready at ${url}`)
    console.log('https://studio.apollographql.com/dev')
}).catch((error) => {
    console.log(error)
})