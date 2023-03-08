import CardModel from '@/utils/card.model.js';
import Card from '@/components/card.jsx';

export default function Cards({ data }) {
  /**
   * @type {Array<Record<string, string>>}
   */
  const cards = JSON.parse(data);

  return (
    <div>
      <h1>All cards</h1>
      {cards.map(card => (
        <details key={card._id}>
          <summary>Card name: { card.name }</summary>
          <Card key={card._id} card={card}/>
        </details>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const DB = await CardModel()._instance;
  const Cards = await DB.model('cards');
  const data = await Cards.find();

  return {
    props: { data: JSON.stringify(data) }
  }
}
