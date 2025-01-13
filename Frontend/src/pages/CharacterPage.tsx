import { useEffect, useRef, useState } from 'react';
import { fetchCharacters } from '../services/api.ts';
import { Character } from '../../../shared/types/character.ts';
import icon from '../assets/images/character/icon.webp';
import Page from '../components/page/Page.tsx';
import PageHeader from '../components/page/pageheader/PageHeader.tsx';
import { useSidebar } from '../context/useSidebar.ts';

export default function CharacterPage(){
  const [characters, setCharacters] = useState([]);
  const [columns, setColumns] = useState('grid-cols-7');
  const containerRef = useRef<HTMLDivElement>(null);
  const {isOpen} = useSidebar();

  const calculateColumns = (width: number) => {
    if(width > 2100) return 'grid-cols-12';
    else if(width > 1920) return 'grid-cols-11';
    else if(width > 1700) return 'grid-cols-10';
    else if(width > 1440) return 'grid-cols-9';
    else if(width > 1280) return 'grid-cols-8';
    else if(width > 1200) return 'grid-cols-7';
    else if(width > 950) return 'grid-cols-6';
    else if(width > 800) return 'grid-cols-5';
    else if(width > 735) return 'grid-cols-4';
    else return 'grid-cols-3';
  }

  const updateColumns = () => {
    const containerWidth:number = containerRef.current?.offsetWidth || 0;
    setColumns(calculateColumns(containerWidth));
  }

  useEffect(() => {
    fetchCharacters().then(setCharacters).catch(console.error);
    updateColumns();

    window.addEventListener('resize', updateColumns);

    return () => {
      window.removeEventListener('resize', updateColumns);
    }
  }, [isOpen]);

  return (
    <Page>
      <PageHeader page="Characters List" title="Honkai: Star Rail Characters List" description="List of all available characters in Honkai: Star Rail" date="08/01/2025"
      image={icon}/>
      {/*${bgColor[character.element.color as keyof typeof bgColor]}*/}
      <div ref={containerRef} className={`grid gap-4 p-20 ${columns}`}>
        {characters.map((character: Character) => (
          <div className="w-36 h-48 object-cover overflow-hidden bg-blue-500" key={character.id}>
            <h2>{character.name}</h2>
            <h2>{character.path.name}</h2>
            <img src={character.element.imageUrl} />
            <img src={character.imageUrl} />
          </div>
        ))}
      </div>

    </Page>
  )
}
