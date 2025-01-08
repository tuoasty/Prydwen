import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api.ts';
import { Character } from '../../../shared/types/character.ts';
import { bgColor } from '../components/details/color.ts';

export default function CharacterPage(){
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters).catch(console.error);
  }, []);

  return (
    <div className="overflow-x-auto h-full">
      {characters.map((character:Character) => (
        <div className={`${bgColor[character.element.color as keyof typeof bgColor]}`} key={character.id}>
          <h2>{character.name}</h2>
          <h2>{character.path.name}</h2>
          <img src={character.element.imageUrl} />
          <img src={character.imageUrl} />
        </div>
      ))}
    </div>
  )
}
