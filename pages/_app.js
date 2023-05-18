import Header from '@/Components/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    <Header></Header>
    <Component {...pageProps} />
  </div>
}
