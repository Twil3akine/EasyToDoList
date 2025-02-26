import './App.css'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

function App() {
  const today = new Date();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [limit, setLimit] = useState<string>(`${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`)
  const [completed, setCompleted] = useState<boolean>(false);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setTitle(target.value);
  }

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setDescription(target.value);
  }

  const handleLimitChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setLimit(target.value);
  }

  const handleCompletedChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setCompleted(target.value === "on");
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = ( event ) => {
    event.preventDefault();

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
