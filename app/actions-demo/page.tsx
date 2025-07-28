import { prisma } from '@/lib/prisma'
import Form from './Forms'
import TitleItem from './TitleItem'
import Info from './Info';

type Title = { id: string; text: string }

export default async function ActionsDemoPage() {
  const titles: Title[] = await prisma.title.findMany({
    orderBy: { text: 'asc' },
  })

  return (
    <main className="p-10 max-w-xl mx-auto space-y-6">

    <Info />

      <h1 className="text-2xl font-bold">Saved Titles</h1>

      <Form />

      <ul className="space-y-2">
        {titles.map((item) => (
          <li key={item.id}>
            <TitleItem id={item.id} text={item.text} />
          </li>
        ))}
        {titles.length === 0 && (
          <p className="text-gray-500">No title has been added yet</p>
        )}
      </ul>
    </main>
  )
}
