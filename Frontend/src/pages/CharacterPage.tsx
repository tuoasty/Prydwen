import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api.ts';
import { Character } from '../../../shared/types/character.ts';
import icon from '../assets/images/character/icon.webp';
import Page from '../components/page/Page.tsx';
import PageHeader from '../components/page/pageheader/PageHeader.tsx';

export default function CharacterPage(){
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters).catch(console.error);
  }, []);

  return (
    <Page>
      <PageHeader page="Characters List" title="Honkai: Star Rail Characters List" description="List of all available characters in Honkai: Star Rail" date="08/01/2025"
      image={icon}/>
      {characters.map((character: Character) => (
        <div className={``} key={character.id}>
          <h2>{character.name}</h2>
          <h2>{character.path.name}</h2>
          <img src={character.element.imageUrl} />
          <img src={character.imageUrl} />
        </div>
      ))}
    </Page>
  )
}
