import React from "react";

function CharacterDetail({ character }) {
  if (!character) return null;

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="character-image"
      />
      {character.description && <p>{character.description}</p>}
      <p>
        <strong>Aparições em quadrinhos:</strong> {character.comics.available}
      </p>
    </div>
  );
}

export default CharacterDetail;