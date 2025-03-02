'use server'

import { NotChangePayload, SpellerApi } from '@/entities/speller'
import axios from 'axios'

export const logCopyAction = async (payload: NotChangePayload) => {
  try {
    await SpellerApi.notChange(payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
