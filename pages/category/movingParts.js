import { DocumentTextIcon } from "@heroicons/react/outline"

const movingParts = () => {
  return(
    <div className="max-w-4xl mx-auto py-24">
      <h1 className="mb-8">
        <span className="text-6xl mb-4 block">😎</span>
        <span className="text-4xl font-bold">動きのあるパーツ</span>
      </h1>
      <ul className="leading-8">
        <li>
          <a href="./movingParts/scroll" className="flex items-center underline hover:no-underline">
            <DocumentTextIcon className="h-5 w-5 text-slate-500 mr-1" />
            <span>スクロールで表示</span>
          </a>
        </li>
        <li>
          <a href="/movingParts/scroll" className="flex items-center underline hover:no-underline">
            <DocumentTextIcon className="h-5 w-5 text-slate-500 mr-1" />
            <span>スクロールで表示</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default movingParts
