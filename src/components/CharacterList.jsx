import React from "react";

function CharacterList({ characters, onCharacterClick, selectedCharacter }) {
  return (
    <div className="characters-list">
      <h2>Lista de Personagens</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id} className={selectedCharacter && selectedCharacter.id === character.id ? "selected" : ""}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onCharacterClick(character);
            }}>
              {character.name}
            </a>
            {/* Apenas em telas pequenas e apenas para o personagem selecionado */}
            {selectedCharacter && selectedCharacter.id === character.id && (
              <div className="mobile-character-detail">
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;