import React, {useState} from 'react';
import axios from 'axios';
import ApiComponent from './ApiKey';
import FilmComponent from './Film';

const FilmRequestComponent = () => {
    const [data, setData] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [film, setFilm] = useState("");

    const makeRequest =(event) => {
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${film}`)
            .then(response => {
                console.log(response.data);
                setData(response.data);
            });
    }

    return(
    <>
        <div>
            <h1>Welcome to Film's Library</h1>
            <br/>
            <p>Please enter your Api key:</p>
            <input type="text" onChange={(event) => updateApi(event)}/>
            <br/>
            <p>Please enter the film name:</p>
            <input type="text" onChange={(event) => updateFilm(event)}/>
            <br/>
            <button onClick={(event) => makeRequest(event)}>Press to search for films</button>
            <br/>
            <br/>
            <br/>
            <h2>{data.Title}</h2>
            <br/>
            <h3>{data.Year}</h3>
            <h3>{data.Genre}</h3>
        </div>
    </>
    );
}

export default FilmRequestComponent;
