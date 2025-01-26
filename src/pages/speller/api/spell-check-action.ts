'use server'

import { spellerApiService, SpellerState } from '@/entities/speller'

export type ActionState = {
  data: SpellerState['response'] | null
  error: string | null
}

const spellCheckAction = async (
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const text = formData.get('speller-text') as string
    const isStrictCheck = formData.get('isStrictCheck') === 'on'
    const { data } = await spellerApiService.check({
      text,
      isStrictCheck,
    })

    return {
      data: { ...data, requestedWithStrictMode: isStrictCheck },
      error: null,
    }
  } catch {
    return {
      data: null,
      error: '맞춤법 검사 중 오류가 발생했습니다.',
    }
  }
}

export { spellCheckAction }
