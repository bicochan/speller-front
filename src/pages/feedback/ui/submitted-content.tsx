'use client'

import React, { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/tailwind-merge'
import ArrowBottomIcon from '@/shared/ui/icon/icon-arrow-bottom.svg'

const SubmittedContent = ({ data }: { data: string }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'rounded-2xl bg-slate-200 p-4 tab:p-5 pc:grid pc:w-full pc:grid-cols-[auto_1fr] pc:gap-x-[2.625rem] pc:rounded-[1.25rem]',
        isExpanded
          ? 'tab:min-h-[17.25rem]'
          : 'min-h-[6.75rem] tab:min-h-[7.25rem]',
      )}
    >
      <h3 className='mb-2 text-base font-semibold tracking-[-0.02rem] text-slate-600 tab:text-lg tab:tracking-[-0.0225rem] pc:text-xl'>
        발송된 문의 내용
      </h3>
      <div className='relative'>
        <div
          className={cn(
            'overflow-scroll',
            isExpanded && 'pb-6 tab:pb-8 pc:mb-8 pc:max-h-[17.25rem] pc:pb-0',
          )}
        >
          <p
            className={cn(
              'min-h-fit text-base leading-[140%] tracking-[-0.02rem] text-slate-500 pc:text-xl pc:leading-[160%] pc:tracking-[-0.025rem]',
              isExpanded ? 'line-clamp-none' : 'line-clamp-2 pc:line-clamp-4',
            )}
          >
            {data}
          </p>
        </div>
        <Button
          variant={null}
          className={cn(
            'absolute bottom-0 right-0 h-6 gap-1 rounded-none bg-slate-200 p-0 text-sm font-normal text-slate-600 underline before:absolute before:bottom-0 before:right-full before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-slate-200 before:content-[""] tab:h-7 tab:text-base pc:h-8',
            isExpanded && 'text-slate-400',
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '접기' : '자세히 보기'}
          <ArrowBottomIcon
            className={cn('!size-6', isExpanded ? 'rotate-180' : '')}
          />
        </Button>
      </div>
    </div>
  )
}

export { SubmittedContent }
