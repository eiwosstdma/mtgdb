import Link from 'next/link.js';
import Image from 'next/image';

export default function({ card }) {
  return (
    <article>
      <header>
        <h1>{ card?.name }</h1>
        <p>
          Type: { card.type } <br/>
          Color: { card.color }
        </p>
      </header>

      <section style={{width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image src={card.image} alt={"Name of the card" + card.name} width="333" height="333"/>
      </section>

      <footer>
        <Link href={ "/delete/" + card?._id }>Delete</Link>
      </footer>
    </article>
)
}
