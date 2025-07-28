'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteTitle(formData: FormData): Promise<void> {
    const id = formData.get('id') as string | null
  
    if (!id) {
      console.log('شناسه یافت نشد')
      return
    }
  
    try {
      await prisma.title.delete({
        where: { id },
      })
  
      revalidatePath('/actions-demo')
  
      // اگر میخوای پیغام نمایش بدی، میتونی با روش دیگه ای مدیریت کنی
      // مثل ریدایرکت یا استیت سمت کلاینت
    } catch (err) {
      console.error('❌ Error deleting title:', err)
    }
  }
  
