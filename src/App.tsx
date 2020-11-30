import React, { useEffect, useState } from 'react';

import Pagination from 'react-js-pagination';

import { CharactersResults } from './components';
import { Character, CharacterResponse } from './interfaces';

import './App.scss';

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [copyright, setCopyright] = useState<string>('');
    const [charactersResults, setCharactersResults] = useState<Character[]>([]);
    const [offset, setOfset] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const limit = 20;

    useEffect(() => {
        const params = {
            ts: process.env.REACT_APP_TIMESTAMP,
            apikey: process.env.REACT_APP_API_KEY,
            hash: process.env.REACT_APP_HASH,
        };
        console.log(params);
        const charactersApiCall = `https://gateway.marvel.com:443/v1/public/characters?ts=${params.ts}&apikey=${params.apikey}&hash=${params.hash}&offset=${offset}&limit=${limit}`;

        setIsLoading(true);

        fetch(charactersApiCall)
            .then((res) => res.json())
            .then((response: CharacterResponse) => {
                setIsLoading(false);
                setCharactersResults(response.data.results);
                setCopyright(response.copyright);
                setTotal(response.data.total);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [offset]);

    const renderCharacters = () => {
        return <CharactersResults isLoading={isLoading} charactersResults={charactersResults} />;
    };

    const handlePageChange = (pageNumber: number) => {
        setOfset((pageNumber - 1) * limit);
        setActivePage(pageNumber);
    };

    const renderPagination = () => {
        const paginationBasic = (
            <Pagination
                activePage={activePage}
                itemsCountPerPage={limit}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                activeLinkClass="active"
            />
        );

        return paginationBasic;
    };

    return (
        <>
            <header className="page-header">
                <h2>Marvel Comics - Characters</h2>
            </header>

            <div className="container">
                {renderCharacters()}

                <div className="pagination">{renderPagination()}</div>
            </div>

            <footer className="page-footer">
                <span>Data provided by Marvel. {copyright}</span>
            </footer>
        </>
    );
}

export default App;
