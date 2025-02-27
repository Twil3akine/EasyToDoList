import './App.css'
import { FormEventHandler } from 'react'

function App() {
  const today = new Date();
  const limit = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form: FormData = new FormData(event.currentTarget);

    const title = form.get("title") || "";
    const description = form.get("description") || "";
    const limit = form.get("limit") || "";
    const completed: boolean = form.get("completed") === "on" || false;

    alert(
      `${title}\n${description}\n${limit}\n${completed ? "Yes" : "No"}`
    )
  }

  return (
    <>
      <form name='Form' onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name='title' value="Input task title" />
        </label>

        <label>
          Description:
          <textarea name='description' value="Input task description" />
        </label>

        <label>
          Limit:
          <input type="date" name='limit' defaultValue={limit} />
        </label>

        <label>
          Completed:
          <input type="checkbox" name='completed' defaultValue="" />
        </label>

        <input type="submit" value={"Submit"} />
      </form>
    </>
  )
}

export default App
