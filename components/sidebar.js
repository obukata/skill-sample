import { ChevronRightIcon, ChevronDoubleLeftIcon, DocumentTextIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="bg-slate-50 w-[230px] flex-shrink-0 flex-grow-0">
      <div className='flex justify-end py-2 px-4'>
        <button className='p-1 hover:bg-slate-200 rounded-sm'>
          <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-500" />
        </button>
      </div>
      <div className="flex py-2 px-4 mb-4">
        <a href="/">
          <span className="mr-2">🐿️</span>
          <span className="font-semibold">Skill Sample</span>
        </a>
      </div>
      <div className="py-6 border-t">
        <div className="px-4 text-xs text-slate-500 font-semibold mb-2">CATEGORY</div>
        <div className='px-2'>
          <a href="/category/movingParts" className='p-1 flex items-center hover:bg-slate-200 rounded-sm'>
            <div className='flex-shrink-0 flex-grow-0'><button onClick={toggleNavigation} className="hover:bg-slate-300 rounded-md p-0.5 flex items-center"><ChevronRightIcon className="w-4 h-4 text-slate-500 rotate-90" /></button></div>
            <div className='flex-shrink-0 flex-grow-0 mr-2'>😎</div>
            <div className='flex-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap'>動きのあるパーツ</div>
          </a>
          <a href="####" className='p-1 pl-10 flex items-center hover:bg-slate-200 rounded-sm'>
            {/* <div className='flex-shrink-0 flex-grow-0'><button onClick={toggleNavigation} className="hover:bg-slate-300 rounded-md p-0.5 flex items-center"><ChevronRightIcon className="w-4 h-4 text-slate-500" /></button></div> */}
            <div className='flex-shrink-0 flex-grow-0 mr-2'><DocumentTextIcon className="h-5 w-5 text-slate-500" /></div>
            <div className='flex-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap'>スクロールで表示</div>
          </a>
        </div>
        <div className='px-2'>
          <a href="####" className='p-1 flex items-center hover:bg-slate-200 rounded-sm'>
            <div className='flex-shrink-0 flex-grow-0'><button onClick={toggleNavigation} className="hover:bg-slate-300 rounded-md p-0.5 flex items-center"><ChevronRightIcon className="w-4 h-4 text-slate-500" /></button></div>
            <div className='flex-shrink-0 flex-grow-0 mr-2'>😎</div>
            <div className='flex-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap'>動きのあるパーツ</div>
          </a>
        </div>
        <div className='px-2'>
          <a href="####" className='p-1 flex items-center hover:bg-slate-200 rounded-sm'>
            <div className='flex-shrink-0 flex-grow-0'><button onClick={toggleNavigation} className="hover:bg-slate-300 rounded-md p-0.5 flex items-center"><ChevronRightIcon className="w-4 h-4 text-slate-500" /></button></div>
            <div className='flex-shrink-0 flex-grow-0 mr-2'>😎</div>
            <div className='flex-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap'>動きのあるパーツ</div>
          </a>
        </div>
        <div className='px-2'>
          <a href="####" className='p-1 flex items-center hover:bg-slate-200 rounded-sm'>
            <div className='flex-shrink-0 flex-grow-0'><button onClick={toggleNavigation} className="hover:bg-slate-300 rounded-md p-0.5 flex items-center"><ChevronRightIcon className="w-4 h-4 text-slate-500" /></button></div>
            <div className='flex-shrink-0 flex-grow-0 mr-2'>😎</div>
            <div className='flex-auto text-sm text-ellipsis overflow-hidden whitespace-nowrap'>動きのあるパーツ</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

function toggleNavigation(e) {
  this.style.transform = 'rotate(90deg)'
  e.preventDefault()
}
