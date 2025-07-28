'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { saveTitle, FormState } from '../actions/save-title'
import { updateTitle } from '../actions/update-title'

type Props = {
  initialTitle?: string
  id?: string
  onDone?: () => void
}

const initialState: FormState = {
  message: '',
  success: false,
}

export default function Form({ initialTitle = '', id, onDone }: Props) {
  const [loading, setLoading] = useState(false)
  const [state, formAction] = useActionState(
    id ? updateTitle : saveTitle,
    initialState
  )
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state.success) {
      if (inputRef.current) inputRef.current.value = ''
      if (onDone) onDone()
    }
    setLoading(false)
  }, [state, onDone])

  function handleSubmit() {
    setLoading(true)
  }

  return (
    <form
      action={formAction}
      className="space-y-2"
      onSubmit={handleSubmit}
    >
      <input
        defaultValue={initialTitle}
        ref={inputRef}
        name="title"
        placeholder="Enter title"
        className="border border-gray-300 p-2 rounded w-full"
      />
      {id && <input type="hidden" name="id" value={id} />}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded cursor-pointer"
        disabled={loading}
      >
        {loading ? (id ? 'Editing...' : 'Saving...') : id ? 'Edit' : 'Save'}
      </button>

      {state.message && (
        <p className={state.success ? 'text-green-600' : 'text-red-600'}>
          {state.message}
        </p>
      )}
    </form>
  )

}
