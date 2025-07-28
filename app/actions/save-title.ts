'use server'

import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const schema = z.object({
  title: z.string().min(1, 'Title cannot be empty'),
})

export type FormState = {
  message: string
  success: boolean
}

export async function saveTitle(_: FormState, formData: FormData): Promise<FormState> {
  const raw = formData.get('title')

  const result = schema.safeParse({ title: raw })

  if (!result.success) {
    return {
      message: result.error.format().title?._errors[0] || 'Input error',
      success: false,
    }
  }

  try {
    await prisma.title.create({
      data: {
        text: result.data.title,
      },
    })

    revalidatePath('/actions-demo')

    return {
      message: '✅ Title saved successfully',
      success: true,
    }
  } catch (err) {
    console.error('❌ Prisma error:', err)
    return {
      message: 'Error saving data',
      success: false,
    }
  }
}
