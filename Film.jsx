import React, {useState} from 'react';

const FilmComponent = () => {

    const [film, setFilm] = useState("");

    const updateFilm =(event) => {
        event.preventDefault();
        setFilm(event.target.value);
    }
}

export default FilmComponent;
