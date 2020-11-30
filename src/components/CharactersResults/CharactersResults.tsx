import React from 'react';

import Spinner from 'react-bootstrap/Spinner';

import { Character } from '../../interfaces';
import { CharacterCard } from '..';

import './CharactersResults.scss';

export interface CharactersResultsProps {
    isLoading: boolean;
    charactersResults: Character[];
}

export function CharactersResults(props: CharactersResultsProps): any {
    const { isLoading, charactersResults } = props;

    const characterCards = charactersResults.map((character, index) => {
        return (
            <div key={index} className="row justify-content-center mb-4">
                <div className="col-sm-12 characters-results__character-column">
                    <CharacterCard character={character} />
                </div>
            </div>
        );
    });

    if (isLoading) {
        return (
            <div className="characters-results characters-results--loading">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (characterCards.length === 0) {
        return <div className="characters-results characters-results--empty">No results</div>;
    }

    return (
        <div className="characters-results">
            {characterCards}
        </div>
    );
}
