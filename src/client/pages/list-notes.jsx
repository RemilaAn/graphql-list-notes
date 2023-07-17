import {useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import {LIST_NOTES} from "../graphQL/queries/list-notes";

export const ListNotesPage = () => {
    const { data} = useQuery(LIST_NOTES);
    const [notes, setNotes] = useState([])

    useEffect(() => {
        if(data) {
            setNotes(data.listNotes)
        }
    }, [data])

    return <>{notes.map((note) => {
        return <h1>{note.name}</h1>
    })}</>
}