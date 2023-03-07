import mongoose from 'mongoose';

const cardDBSchema = new mongoose.Schema({
  name: String,
  color: String,
  type: String,
  image_link: String
});

class CardDBModel {
  _instance;

  constructor() {
    this._instance = mongoose.connect(process.env.DB_URI);
    this.register();
  }

  register() {
    this._instance?.register('cards', cardDBSchema);
  }
}

export default function CardModel() {
  return new CardDBModel();
}
