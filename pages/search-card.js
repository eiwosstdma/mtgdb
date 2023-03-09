import { parseBody } from 'next/dist/server/api-utils/node.js';
import CardModel from '@/utils/card.model.js';
import Card from '@/components/card.jsx';

export default function SearchCard({ data }) {
  const cards = JSON.parse(data);

  return (
    <div>
      <h1>Searched cards found in the DB</h1>
      {
        cards?.length === 0 ?
          'No cards has been found!':
          cards.map(card => (
            <details key={card._id}>
              <summary>Card name: { card.name }</summary>
              <Card key={card._id} card={card}/>
            </details>
          ))
      }
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const body = await parseBody(req, '1mb');
  const { name, type, color } = body;

  const DB = await CardModel().share();
  const Cards = await DB.model('cards');
  // const cards = await Cards.find({ name, color, type });

  let cards = [];

  if (type.length === 0 && color.length === 0)
    cards = await Cards.find({ name });
  else if (type.length === 0 && color.length > 0)
    cards = await Cards.find({ name, color });
  else if (type.length > 0 && color.length === 0)
    cards = await Cards.find({ name, type });
  else
    cards = await Cards.find({ name, type, color });


  return {
    props: {
      data: JSON.stringify(cards)
    }
  }
}
