'use client'

import React, { useCallback, useState } from 'react'

import { SpellingCorrectionText } from './spelling-correction-text'
import { errInfo, mock_text } from '../mock'
import { ScrollGradientFade } from '@/shared/ui/scroll-gradient-fade'
import { ScrollContainer } from '@/shared/ui/scroll-container'
import { useIsClient } from '@/shared/lib/use-is-client'

const CorrectionContent = () => {
  const isClient = useIsClient()
  const [isFocused, setIsFocused] = useState(false)
  const [showGradient, setShowGradient] = useState(false)
  const handleScroll = useCallback((isScrolling: boolean) => {
    setShowGradient(isScrolling)
    setIsFocused(isScrolling)
  }, [])

  return (
    <>
      {/* 교정 문서 텍스트*/}
      <div className='mb-[0.56rem] flex justify-between tab:mb-[0.62rem]'>
        <h1 className='text-lg font-semibold tracking-[-0.0225rem]'>
          교정 문서
        </h1>
      </div>
      {/* 교정 텍스트 */}
      <div className='min-w-0 flex-1'>
        <ScrollContainer
          isClient={isClient}
          isFocused={isFocused}
          onScrollStatusChange={handleScroll}
          className='h-full min-h-40 flex-1'
        >
          <SpellingCorrectionText text={mock_text} corrections={errInfo} />
        </ScrollContainer>
        {/* 스크롤 시 그라디언트 블러 도형 표시 */}
        <ScrollGradientFade showGradient={showGradient} />
      </div>
    </>
  )
}

export { CorrectionContent }
