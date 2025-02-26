import './App.css'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

function App() {
  const today = new Date();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [limit, setLimit] = useState<string>(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`)
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
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>

        <label>Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>

        <label>Limit:
          <input type="date" value={limit} onChange={handleLimitChange} />
        </label>

        <label>Completed:
          <input type="checkbox" onChange={handleCompletedChange} />
        </label>

        <input type="submit" value={"Submit"} />
      </form>
    </>
  )
}

export default App
