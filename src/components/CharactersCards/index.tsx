import {useEffect, useState} from "react";

import { api } from '../../services/api'

interface ICharacters {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }

}

export function CharactersCards() {
    const [characters, setCharacters] = useState<ICharacters[]>([]);

    useEffect(() => {
        api.get('characters')
            .then(response => {
                setCharacters(response.data.data.results);
                console.log('log', characters);
            })
            .catch(err => console.log(err));
    }, []);

    return <>Hello</>
}