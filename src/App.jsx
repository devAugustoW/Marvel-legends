import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

function App() {
	const [character, setCharacter] = useState([]);

	useEffect(() => {
    const fetchCharacters = async () => {
      const publicKey = import.meta.env.VITE_PUBLIC_API_KEY;
      const privateKey = import.meta.env.VITE_PRIVATE_API_KEY;

      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters`,
          {
            params: {
              ts,
              apikey: publicKey,
              hash,
              limit: 10,
            },
          }
				);
				setCharacter(response.data.data.results)
        
      } catch (error) {
				console.error("Error fetching characters:", error);

			}
    };

		fetchCharacters();
  }, []);

  return (
		<>
			<h1>Marvel</h1>
			<ul>
				{character.map((character) => (
					<li key={character.id}>
						<h2>{character.name}</h2>
						<img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
					</li>
				))}
			</ul>
		</>
	)
	
}

export default App;
