import {gql} from "apollo-server";

export const typeDefs = gql`
    type Query {
        listNotes: [Note]
    }
    type Note {
        name: String
    }
`