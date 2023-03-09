export default function SearchForm() {
  return (
    <form method="post" action="/search-card">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required/>

      <label htmlFor="color">Color</label>
      <select name="color" id="color">
        <option></option>
        <option value="colorless">Colorless</option>
        <option value="multicolor">Multicolor</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>

      <label htmlFor="type">Type</label>
      <select name="type" id="type">
        <option></option>
        <option value="creature">Creature</option>
        <option value="instant">Instant</option>
        <option value="enchantment">Enchantment</option>
        <option value="artifact">Artifact</option>
        <option value="sorcery">Sorcery</option>
        <option value="planeswalker">Planeswalker</option>
        <option value="land">Land</option>
      </select>

      <br/>
      <hr/>
      <button type="submit">Search a card</button>
    </form>
  )
}
