export const resolvers = {
    Query: {
        listNotes: () => {
            return [{
                name: "Note 1"
            },{
                name: "Note 2"
            },{
                name: "Note 3"
            },{
                name: "Note 4"
            }]
        }
    }
}