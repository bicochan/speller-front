import { getWordsAroundIndex } from '@/shared/lib/util'
import { ChangeEvent, useState } from 'react'
import { useAppSelector } from '@/shared/lib/use-redux'
import { logUserReplaceAction } from '../api/log-user-replace-action'

interface useUserReplaceParams {
  handleClose: () => void
}

export const useUserReplace = ({ handleClose }: useUserReplaceParams) => {
  const {
    response: { errInfo, str },
    selectedErrIdx,
  } = useAppSelector(state => state.speller)

  const { orgStr: errorWord, start } = errInfo[selectedErrIdx]

  const [value, setValue] = useState('')

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
  }

  const handleEdit = async () => {
    try {
      await logUserReplaceAction({
        errorWord,
        replaceWord: value,
        sentence: getWordsAroundIndex(str, start),
      })
    } catch (err) {
      console.error(err)
    } finally {
      // 로그 등록 시 에러가 발생하더라도 정상 동작을 유지
      handleClose()
    }
  }

  return { handleChange, handleEdit, value, errorWord }
}
