import mongoose from 'mongoose';

const cardDBSchema = new mongoose.Schema({
  name: String,
  color: String,
  type: String,
  image: String
});

class CardDBModel {
  _instance;

  constructor() {
    this._instance = mongoose.connect(process.env.DB_URI);
    this.register();
  }

  async register() {
    await (await this._instance).model('cards', cardDBSchema);
  }
}

export default function CardModel() {
  return new CardDBModel();
}
