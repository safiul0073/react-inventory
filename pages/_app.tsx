import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import App from '../components/layouts/App'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  if (router.asPath === '/auth/Register' || router.asPath === '/auth/Login') {
    return <Component {...pageProps} />
  }else {
    return (
      <App>
      <Component {...pageProps} />
      </App>
    )
  }
  
}

export default MyApp
