import { useEffect, useState } from 'react';
import { fetchItems } from '../services/api.ts';
import { Item } from '../../../shared/types/item.ts';
import { useSidebar } from '../context/useSidebar.ts';


export default function HomePage(){
  const [items, setItems] = useState([]);
  const { isOpen } = useSidebar();

  useEffect(() => {
    console.log("Test")
    fetchItems().then(setItems).catch(console.error);
  }, [items]);

  return (
    <div className="text-white overflow-auto">
      <ul>
        {items.map((item:Item) => (
          <li>
            <h2>{item.name}</h2>
            <h2>{item.description}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
