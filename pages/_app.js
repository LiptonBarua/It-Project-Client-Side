import AuthProvider from '@/AuthProvider/AuthProvider'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import ShareProvider from '@/ShareProvider/ShareProvider'
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'




export default function App({ Component, pageProps }) {
  
  const queryClient = new QueryClient()
  return <div>
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <ShareProvider>
  <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </ShareProvider>
   </AuthProvider>
  </QueryClientProvider>
  </div>
}
