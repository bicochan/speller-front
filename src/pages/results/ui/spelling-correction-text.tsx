import { useSpeller, type CorrectInfo } from '@/entities/speller'
import { cn } from '@/shared/lib/tailwind-merge'

interface CorrectionProps {
  text: string
  corrections: CorrectInfo[]
}

const SpellingCorrectionText: React.FC<CorrectionProps> = ({
  text,
  corrections,
}) => {
  const { handleUpdateCorrectInfo } = useSpeller()

  let lastIndex = 0 // useRef 대신 일반 변수 사용 - 매 렌더링마다 초기화 필요
  const parts: React.ReactNode[] = []

  corrections.forEach((pos, idx) => {
    const isResolved = !!pos.crtStr
    const recommendedWord = pos.candWord.split('|')[0]

    // 현재 교정 위치 이전의 일반 텍스트 처리
    if (pos.start > lastIndex) {
      parts.push(
        <span key={`text-${idx}`}>{text.slice(lastIndex, pos.start)}</span>,
      )
    }

    // 교정이 필요한 텍스트 처리
    // 상단에 추천 단어를 표시하고 원본 텍스트에 밑줄 표시
    parts.push(
      <span
        key={`correction-${idx}`}
        className={cn(
          'relative inline-block pt-6 transition-all duration-300',
          isResolved && 'pt-0',
        )}
      >
        <button
          className={cn(
            'absolute left-0 top-0 h-6 leading-none opacity-100 transition-all duration-300',
            isResolved && '-z-10 opacity-0',
          )}
          onClick={() => {
            handleUpdateCorrectInfo({
              ...pos,
              crtStr: recommendedWord,
            })
          }}
        >
          <span className='whitespace-nowrap text-[1rem] font-bold leading-[170%] tracking-[-0.02rem] text-slate-600'>
            {/* 첫 번째 추천 교정 단어 */}
            {recommendedWord}
          </span>
        </button>
        <span
          className={cn(
            'text-[1.125rem] font-bold leading-[160%] tracking-[-0.0225rem] text-green-100 underline decoration-[2px] underline-offset-[25%] tab:leading-[170%] tab:tracking-[-0.03375rem] pc:text-[1.25rem] pc:tracking-[-0.025rem]',
            isResolved && 'text-slate-600',
          )}
        >
          {pos.crtStr ?? pos.orgStr}
        </span>
      </span>,
    )

    lastIndex = pos.end
  })

  // 마지막 교정 위치 이후의 남은 텍스트 처리
  if (lastIndex < text.length) {
    parts.push(<span key='final'>{text.slice(lastIndex)}</span>)
  }

  return (
    <div className='h-0 w-full break-all text-[1.125rem] leading-[160%] tracking-[-0.0225rem] [text-justify:distribute] tab:leading-[170%] tab:tracking-[-0.03375rem] pc:text-[1.25rem] pc:tracking-[-0.025rem]'>
      {parts}
    </div>
  )
}

export { SpellingCorrectionText }
