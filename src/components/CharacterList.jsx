import React from "react";

function CharacterList({ characters, onCharacterClick }) {
  return (
    <div className="characters-list">
      <h2>Lista de Personagens</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <a href="#" onClick={() => onCharacterClick(character)}>
              {character.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;