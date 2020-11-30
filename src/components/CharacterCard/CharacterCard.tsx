import React from 'react';

import { Character } from '../../interfaces';

import './CharacterCard.scss';

export interface CharacterCardProps {
    character: Character;
}

export function CharacterCard(props: CharacterCardProps): any {
    const { character } = props;

    return (
        <div className="character-card" role="button">
            <div
                className="character-card__image"
                style={{
                    backgroundImage: `url(${character.thumbnail.path}/detail.${character.thumbnail.extension})`,
                }}
            ></div>
            <div className="character-card__name">Name: {character.name}</div>
        </div>
    );
}
