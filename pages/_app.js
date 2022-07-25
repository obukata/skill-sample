import '../styles/globals.css'
import Sidebar from '../components/sidebar.js'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex text-slate-600">
      <Sidebar />
      <div className='w-full min-h-screen'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
