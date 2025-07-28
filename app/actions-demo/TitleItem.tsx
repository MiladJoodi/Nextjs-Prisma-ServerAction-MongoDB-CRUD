'use client'

import { useState } from 'react'
import { deleteTitle } from '../actions/delete'
import Form from './Forms'

type Props = {
  id: string
  text: string
}

export default function TitleItem({ id, text }: Props) {
  const [isEditing, setIsEditing] = useState(false)

  function handleDeleteSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!window.confirm(`Are you sure you want to delete "${text}"?`)) {
      event.preventDefault()
    }
  }

  function handleEditDone() {
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="border p-2 rounded shadow text-sm">
        <Form initialTitle={text} id={id} onDone={handleEditDone} />
        <button
          onClick={() => setIsEditing(false)}
          className="mt-2 text-gray-500 text-xs hover:underline cursor-pointer"
          type="button"
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <form
      action={deleteTitle}
      method="post"
      className="border p-2 rounded shadow text-sm flex justify-between items-center gap-2"
      onSubmit={handleDeleteSubmit}
    >
      <span>{text}</span>
      <input type="hidden" name="id" value={id} />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="text-blue-500 hover:underline text-xs cursor-pointer"
        >
          Edit
        </button>
        <button
          type="submit"
          className="text-red-500 hover:underline text-xs cursor-pointer"
        >
          Delete
        </button>
      </div>
    </form>
  )
}
