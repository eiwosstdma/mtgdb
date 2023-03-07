export default function SearchForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required/>

      <label htmlFor="color">Name</label>
      <input type="text" id="color" name="color" required/>

      <label htmlFor="type">Name</label>
      <input type="text" id="type" name="type" required/>

      <br/>
      <hr/>
      <button type="submit">Add a card</button>
    </form>
  )
}
