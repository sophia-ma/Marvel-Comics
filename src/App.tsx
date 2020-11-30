import React, { useEffect, useState } from 'react';

import './App.scss';
import { CharactersResults } from './components';
import { Character, CharacterResponse } from './interfaces';

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [copyright, setCopyright] = useState<string>('');
    const [charactersResults, setCharactersResults] = useState<Character[]>([]);

    useEffect(() => {
        const starshipApiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`;

        setIsLoading(true);

        fetch(starshipApiUrl)
            .then((res) => res.json())
            .then((response: CharacterResponse) => {
                setIsLoading(false);
                setCharactersResults(response.data.results);
                setCopyright(response.copyright);

                console.log(response.data.results);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    const renderCharacters = () => {
        return <CharactersResults isLoading={isLoading} charactersResults={charactersResults} />;
    };

    return (
        <>
            <header className="page-header">
                <h2>Marvel Comics - Characters</h2>
            </header>

            <div className="container">{renderCharacters()}</div>

            <footer className="page-footer">
                <p>Data provided by Marvel. {copyright}</p>
            </footer>
        </>
    );
}

export default App;
