import Link from 'next/link'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const Header = () => {
  return (
    <div className='flex items-center justify-center bg-white'>
      <header className='flex flex-1 items-center justify-between px-6 py-4 pc:container tab:px-[3.75rem] tab:py-5 pc:p-[2rem_3.75rem]'>
        <div className='flex items-center gap-5'>
          <h1 className='text-xl font-bold tab:text-2xl'>
            한국어 맞춤법 검사기
          </h1>
          <Link href='/' className={`hidden tab:text-xl ${classes.linkButton}`}>
            이전 버전 사용하기
          </Link>
        </div>
        <div className='hidden items-center gap-4 pc:flex'>
          <Link href='/' className={classes.linkButton}>
            검사기 사용법
          </Link>
          <Link href='/feedback' className={classes.linkButton}>
            문의하기
          </Link>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='size-6 bg-icon-menu bg-[length:1.25rem] bg-center bg-no-repeat p-0 hover:bg-accent tab:size-7 tab:bg-[length:1.75rem] pc:hidden'>
              <span className='sr-only'>메뉴보기</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='end'
            className='w-auto rounded-lg bg-slate-100 p-0'
          >
            <ul>
              <li className='group'>
                <Link
                  href='/'
                  className='flex items-center gap-2 border-b border-slate-200 px-2 py-2.5 pr-3 text-sm leading-none group-hover:text-primary tab:text-base'
                >
                  <i
                    className={`${classes.popoverIcon} bg-icon-info group-hover:bg-icon-info-white`}
                  />
                  검사기 사용법
                </Link>
              </li>
              <li className='group'>
                <Link href='/feedback' className={classes.popoverButton}>
                  <i
                    className={`${classes.popoverIcon} bg-icon-question group-hover:bg-icon-question-white`}
                  />
                  문의하기
                </Link>
              </li>
              <li className='group tab:hidden'>
                <Link
                  href='/'
                  className={`${classes.popoverButton} border-none`}
                >
                  <i
                    className={`${classes.popoverIcon} bg-icon-history-back group-hover:bg-icon-history-back-white`}
                  />
                  이전 버전 사용하기
                </Link>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </header>
    </div>
  )
}

const classes = {
  linkButton:
    'rounded-md p-[0.625rem_0.75rem] !leading-none hover:bg-accent tab:inline-flex pc:text-xl',
  popoverButton:
    'flex items-center gap-2 border-b border-slate-200 px-2 py-2.5 pr-3 text-sm leading-none group-hover:text-primary tab:text-base',
  popoverIcon:
    'box-content inline-flex size-4 rounded-full bg-[length:1rem] bg-center bg-no-repeat p-1 group-hover:bg-primary group-hover:text-white tab:size-5 tab:bg-[length:1.25rem]',
}

export { Header }
