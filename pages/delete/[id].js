import { join } from 'node:path';
import { rm } from 'node:fs/promises';

import CardModel from '@/utils/card.model.js';

export default function ID({ message }) {
  return (
    <>
      <p>{ message }</p>
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  try {
    const DB = await CardModel()._instance;
    const Cards = await DB.model('cards');
    const card = await Cards.findById({ _id: id }).exec();
    const fileSubPath = card.image;
    await rm(join(process.cwd(), 'public', fileSubPath));
    await Cards.deleteOne({ _id: id });

    return {
      props: {
        message: 'Card has been deleted.'
      }
    }
  } catch (err) {
    console.log(err);

    return {
      props: {
        message: 'Card cannot be found.'
      }
    }
  }
}
