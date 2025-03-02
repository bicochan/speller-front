'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button'
import { SpellerSetting } from '@/pages/speller/ui/speller-setting'

const NoErrorsPage = () => {
  const router = useRouter()

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='w-full max-w-[22.5rem] tab:max-w-[37.5rem] pc:flex pc:max-w-[65.625rem] pc:justify-end'>
        <SpellerSetting />
      </div>
      <div className='m-4 mt-0 w-full max-w-[22.5rem] tab:max-w-[37.5rem] pc:flex pc:max-w-[65.625rem]'>
        <div className='relative h-[15.5rem] w-full overflow-hidden rounded-tl-lg rounded-tr-lg tab:h-[14.25rem] pc:h-[40.25rem] pc:w-[23.75rem] pc:rounded-bl-[1rem] pc:rounded-tl-[1rem] pc:rounded-tr-none'>
          <Image
            src='/no-errors-mo.png'
            alt='no-errors-visual'
            fill
            className='visible tab:invisible'
          />
          <Image
            src='/no-errors-tab.png'
            alt='no-errors-visual'
            fill
            className='invisible tab:visible'
          />
          <Image
            src='/no-errors-pc.png'
            alt='no-errors-visual'
            fill
            className='invisible pc:visible'
          />
        </div>
        <div className='rounded-bl-lg rounded-br-lg bg-white p-10 pt-7 pc:flex pc:h-[40.25rem] pc:flex-1 pc:flex-col pc:justify-center pc:rounded-bl-none pc:rounded-br-[1rem] pc:rounded-tr-[1rem] pc:px-[3.125rem]'>
          <div className='text-center pc:text-left'>
            <p className='text-2xl font-semibold leading-9 tab:text-[2rem] pc:text-[3rem] pc:leading-[4.5rem]'>
              맞춤법/문법 오류가 없습니다.
            </p>
            <span className='mt-2 inline-block text-base tab:mt-3 tab:text-xl pc:mt-6 pc:text-left pc:text-2xl'>
              기술적 한계로 인해 찾지 못한
              <br />
              맞춤법이나 문법 오류가 있을 수 있습니다.
            </span>
          </div>
          <div className='mt-7 flex justify-center gap-3 tab:mt-8 pc:mt-11 pc:justify-start'>
            <Button
              variant='outline'
              className='h-14 w-32 border-2 border-[#3046EC] bg-white text-lg text-[#3046EC] hover:text-[#3046EC] pc:h-16 pc:w-[9.5rem] pc:text-[1.375rem]'
              onClick={() => router.back()}
            >
              이전 페이지
            </Button>
            <Button
              className='h-14 w-32 text-lg font-semibold pc:h-16 pc:w-[9.5rem] pc:text-[1.375rem]'
              onClick={() => router.push('/')}
            >
              처음 페이지
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { NoErrorsPage }
