import CardModel from '@/utils/card.model.js';
import formidable from 'formidable';
import { rename } from 'node:fs';
import { join } from 'node:path';

export default function AddCard({ message }) {
  return (
    <>
      <p>{ message }</p>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const form = formidable({ multiple: true });
  const formData = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err)
        reject(err);
      else
        resolve({ fields, files });
    });
  });

  const { name, color, type } = formData.fields;
  const filePath = formData.files.file.filepath;
  const fileName = formData.files.file.originalFilename;
  const randomValue = String(Math.floor(Math.random() * 1_000_000));
  const fileNewName = `${randomValue}_${fileName}`;
  const fileNewPath = join(process.cwd(), 'public', 'image', fileNewName);

  const fileHasBeenUploaded = await new Promise((resolve, reject) => {
    rename(filePath, fileNewPath, (err) => {
      if (err)
        reject(false);
      else
        resolve(true);
    });
  });

  if (!fileHasBeenUploaded) {
    return {
      props: {
        message: 'File cannot be uploaded'
      }
    }
  }

  const DB = await CardModel()._instance;
  const Cards = await DB.model('cards');
  const card = new Cards({ name, color, type, image: `/image/${fileNewName}` });

  let message = '';

  try {
    await card.save();
    message += 'Card has been saved successfully.';
  } catch (err) {
    message += 'Card cannot be saved.';
  }

  return {
    props: {
      message
    }
  }
}
