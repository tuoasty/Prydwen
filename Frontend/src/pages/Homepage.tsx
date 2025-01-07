import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api.ts';
import {bgColor} from '../components/details/Color.ts';
import { Character } from '../../../shared/types/character.ts';

export default function HomePage(){
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters).catch(console.error);
  }, []);

  return (
    <div className="overflow-x-auto h-full">
        {characters.map((character:Character) => (
          <div className={`${bgColor[character.element.color as keyof typeof bgColor]}`} key={character.id}>
            <h1>{character.element.color}</h1>
            <h2>{character.name}</h2>
            <img src={character.imageUrl}/>
            <h2>{character.element.name}</h2>
            <img src={character.element.imageUrl}/>
            <h1>{character.path.name}</h1>
          </div>
        ))}
    </div>
  )
}
