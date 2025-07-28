'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function updateTitle(_: any, formData: FormData) {
    const id = formData.get('id') as string
    const text = formData.get('title') as string

    if (!id || !text) {
        return {
            success: false,
            message: 'Invalid ID or title',
        }
    }

    try {
        await prisma.title.update({
            where: { id },
            data: { text },
        })

        revalidatePath('/actions-demo')

        return {
            success: true,
            message: '✅ Title updated successfully',
        }
    } catch (err) {
        console.error('❌ Prisma update error:', err)
        return {
            success: false,
            message: 'Error updating title',
        }
    }
}
