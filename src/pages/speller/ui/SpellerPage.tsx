'use client'

import useSpeller from '../model/useSpeller'
import SpellerHeader from './SpellerHeader'
import SpellerContent from './SpellerContent'
import SpellerFooter from './SpellerFooter'
import MainAd from '@/shared/ui/ads/MainAd'
import SpellerLayout from '@/shared/ui/layout/SpellerLayout'

/**
 * 맞춤법 검사 페이지의 레이아웃을 구성하는 컴포넌트
 *
 * @description
 * - 메인 콘텐츠 영역과 광고 영역으로 구성
 * - 메인 영역은 헤더, 콘텐츠, 푸터의 3단 그리드 구조
 *
 */
const SpellerPage = () => {
  const { setIsStrongCheck, isStrongCheck, ...rest } = useSpeller()

  return (
    <SpellerLayout AdComponent={MainAd}>
      <SpellerHeader
        isStrongCheck={isStrongCheck}
        onCheckChange={setIsStrongCheck}
      />
      <SpellerContent {...rest} />
      <SpellerFooter />
    </SpellerLayout>
  )
}

export default SpellerPage
