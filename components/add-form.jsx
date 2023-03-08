export default function AddForm() {
  return (
    <form action="/add-card" method="post">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required/>

      <label htmlFor="color">Name</label>
      <input type="text" id="color" name="color" required/>

      <label htmlFor="type">Name</label>
      <input type="text" id="type" name="type" required/>

      <label htmlFor="file">Image</label>
      <input type="file" id="file" name="file" required/>

      <br/>
      <hr/>
      <button type="submit">Add a card</button>
    </form>
  )
}
