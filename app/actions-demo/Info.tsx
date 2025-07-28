export default function Info() {
    return (
      <div className="flex items-start gap-3 bg-blue-50 border border-blue-300 p-5 rounded-md text-blue-700 max-w-3xl mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="flex-shrink-0 w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <p className="text-sm leading-relaxed">
          This project is a simple example showing how to use Server Actions in Next.js.
          It includes basic features to add, edit, and delete titles with a minimal UI.
          <br />
          Technologies used:
          <ul className="list-disc list-inside mt-2 space-y-1 text-xs">
            <li>Next.js 13 with App Router and Server Actions</li>
            <li>Prisma ORM for database access</li>
            <li>Zod for input validation</li>
            <li>React Hooks and useActionState for form handling</li>
            <li>revalidatePath for smart page updates</li>
          </ul>
        </p>
      </div>
    )
  }
  