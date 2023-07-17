import {gql} from "@apollo/client";

export const LIST_NOTES = gql`
query ListNotes {
  listNotes {
    name
  }
}
`