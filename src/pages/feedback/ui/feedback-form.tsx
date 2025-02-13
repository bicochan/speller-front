'use client'

import { Button } from '@/shared/ui/button'
import { Label } from '@/shared/ui/label'
import { TextCounter } from '@/shared/ui/text-counter'
import { Textarea } from '@/shared/ui/textarea'

const FeedbackForm = () => {
  return (
    <form className='flex grid-cols-1 flex-col'>
      {/* 문의 내용 */}
      <div className='mt-2 flex flex-col gap-3 pc:mt-[1.125rem] pc:grid pc:grid-cols-[9.25rem_1fr] pc:gap-0'>
        <FormLabel htmlFor='description' label='문의 내용' />
        <div
          className='flex h-full max-h-[13.75rem] w-full flex-col rounded-lg bg-white px-5 py-4 pc:max-h-[21.25rem] pc:min-h-[21.25rem]'
          id='description'
        >
          <Textarea
            value={
              '검사기를 사용할 때 교정 문서에서 대치어를 어떻게 변경하는 건지 잘 모르겠습니다.'
            }
            name='feedback-text'
            onChange={() => {}}
            placeholder='내용을 입력해 주세요.'
            className='text-slate-600 pc:text-xl pc:leading-[160%] pc:tracking-[-0.025rem]'
          />
          <TextCounter count={12} className='self-start' />
        </div>
      </div>
      {/* 폼 전송 버튼 */}

      <div className='mt-3 pb-28 text-end tab:mt-4 tab:pb-[20.875rem] pc:pb-[4.375rem]'>
        <Button className='h-[3.375rem] w-full text-lg tab:w-32 pc:h-16 pc:w-[9.625rem] pc:text-[1.375rem]'>
          전송하기
        </Button>
      </div>
    </form>
  )
}

const FormLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return (
    <Label
      htmlFor={htmlFor}
      className='text-lg font-semibold leading-[138%] tracking-[-0.0225rem] text-slate-600 after:ml-0.5 after:text-blue-500 after:content-["*"] pc:text-2xl pc:tracking-[-0.03rem]'
    >
      {label}
    </Label>
  )
}

export { FeedbackForm }
