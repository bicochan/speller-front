import { useSendReport } from '@/entities/report/model/use-send-report'
import { BasicTextarea } from '@/shared/ui/basic-textarea'
import { Button } from '@/shared/ui/button'
import { toast } from '@/shared/lib/use-toast'

interface ReportFormContentProps {
  handleClose: () => void
}

export const ReportFormContent = ({ handleClose }: ReportFormContentProps) => {
  const { comment, handleChange, handleSubmit } = useSendReport({
    handleClose: () => {
      toast({
        description: '제출되었습니다.',
      })
      handleClose()
    },
  })

  return (
    <>
      <p className='break-keep text-lg text-slate-500 pc:mb-[1.52rem] pc:mt-[1.11rem] pc:w-[18rem] pc:text-[1.05rem] pc:leading-normal'>
        대치어가 맞지 않거나, 다른 의견이 있다면 문의하기를 이용해주세요.
      </p>
      <BasicTextarea
        placeholder='내용을 작성해주세요.'
        value={comment}
        onChange={handleChange}
        className='min-h-[166px] resize-none rounded-[0.375rem] border-slate-200 bg-slate-100 p-4 leading-4 tracking-[-0.02rem] text-slate-600 placeholder:text-slate-300 pc:min-h-[9.96rem] pc:p-[0.96rem] pc:text-[1.2rem] pc:leading-[1.2rem]'
      />
      <Button
        disabled={!comment}
        className='h-[3.125rem] py-[0.88rem] text-lg pc:mt-[0.9rem] pc:h-[3rem] pc:rounded-[0.42rem] pc:py-[0.84rem] pc:text-[1.2rem]'
        onClick={handleSubmit}
      >
        제출하기
      </Button>
    </>
  )
}
