import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import HeroImage from "./components/HeroImage";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  const topCharacterIds = [
    1009610, // Spider-Man
    1009220, // Captain America
    1009368, // Iron Man
    1009664, // Thor
    1009351, // Hulk
    1009189, // Black Widow
    1009338, // Hawkeye
    1009282, // Doctor Strange
    1009417, // Loki
    1009697, // Vision
    1010743, // Groot
    1009515, // Punisher
    1009268, // Deadpool
    1009718, // Wolverine
    1009262, // Daredevil
    1009592, // Silver Surfer
    1009652, // Thanos
    1009480, // Moon Knight
    1009504, // Professor X
    1009257, // Cyclops
    1009243, // Colossus
    1009629, // Storm
    1009472, // Nightcrawler
    1009546, // Rogue
    1009175, // Beast
    1009499, // Polaris
    1009512, // Psylocke
    1017577, // Ms. Marvel (Kamala Khan)
    1010744, // Rocket Raccoon
    1011299, // Guardians of the Galaxy
    1010351, // Hulkling
    1009507, // Quicksilver
    1009562, // Scarlet Witch
    1010338, // Captain Marvel (Carol Danvers)
    1009187, // Black Panther
    1009471, // Nick Fury
    1009239, // Cloak
    1009249, // Dagger
    1009297, // Falcon
    1009148, // Absorbing Man
    1011334, // Winter Soldier
    1011007, // Ant-Man (Scott Lang)
    1010802, // Ant-Man (Hank Pym)
    1009310, // Emma Frost
    1009662, // Thing
    1009366, // Invisible Woman
    1009459, // Mr. Fantastic
    1009356, // Human Torch
    1009524, // Quicksilver
    1009324, // Gambit
    1009599, // Spider-Woman
    1009708, // Mary Jane Watson
    1009372, // J. Jonah Jameson
    1009477, // Nova
    1011358, // Nova (Sam Alexander)
    1009539, // Rhino
    1009276, // Doctor Octopus
    1009287, // Electro
    1014985, // Scarlet Spider (Kaine)
    1009391, // Kraven the Hunter
    1009404, // Lizard
    1011426, // Mysterio
    1009325, // Norman Osborn
    1009486, // Modok
    1010763, // Gamora
    1010365, // Nebula
    1011490, // Hank Pym
    1009481, // Moondragon
    1009451, // Mary Jane Watson
    1010733, // Star-Lord (Peter Quill)
    1009523, // Punisher
    1009608, // Spider-Girl (May Parker)
    1009719, // Wonder Man
    1009680, // Ultron
    1009722, // Wasp
    1009726, // X-23
    1009322, // Galactus
    1009639, // Super-Skrull
    1009234, // Chameleon
    1010373, // Howard the Duck
    1011023, // Sentry
    1009407, // Lockheed
    1017583, // Ms. America
    1010330, // She-Hulk (Jennifer Walters)
  ];

  useEffect(() => {
    const fetchTopCharacters = async () => {
      setLoading(true);
      const publicKey = import.meta.env.VITE_PUBLIC_API_KEY;
      const privateKey = import.meta.env.VITE_PRIVATE_API_KEY;
      const ts = new Date().getTime();
      const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
      
      try {
        
        const charactersPromises = topCharacterIds.map(id => 
          axios.get(
            `https://gateway.marvel.com/v1/public/characters/${id}`,
            {
              params: {
                ts,
                apikey: publicKey,
                hash,
              },
            }
          )
        );
        
        const results = await Promise.all(charactersPromises);
        const fetchedCharacters = results.map(res => res.data.data.results[0]);
        setCharacters(fetchedCharacters);

      } catch (error) {
        console.error("Error fetching characters:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchTopCharacters();
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="marvel-app">
			<HeroImage />
      <h1>Top 100 Personagens da Marvel</h1>
      
      {loading ? (
        <p>Carregando personagens principais...</p>
      ) : (
        <div className="characters-container">
          <CharacterList 
            characters={characters} 
            onCharacterClick={handleCharacterClick} 
          />
          <CharacterDetail character={selectedCharacter} />
        </div>
      )}
    </div>
  );
}

export default App;