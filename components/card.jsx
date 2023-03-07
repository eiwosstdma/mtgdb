import Link from 'next/link.js';
import Image from 'next/image';

export default function({ card }) {
  return (
    <article>
      <header>
        <h1>{ card?.name }</h1>
        <p>
          Type: { card?.type } <br/>
          Color: { card?.type }
        </p>
      </header>

      <Image src={card?.image} alt={"Image of the card" + card?.name} layout="fill" objectFit="contain" />

      <footer>
        <Link href={ "/delete/" + card?._id }>Delete</Link>
      </footer>
    </article>
)
}
