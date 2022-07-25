import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <Head>
        <title>Skill Sample</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-center">
          Welcome to<br />
          <span className='text-blue-600'>Skill Sample</span>
        </h1>

      </main>
    </div>
  )
}
