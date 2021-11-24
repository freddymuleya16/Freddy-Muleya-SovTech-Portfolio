import Header from '@components/Header'
import { Layout } from '@components/layout/Layout'
import '@styles/globals.css'
import Theme from '@styles/theme'

function Application({ Component, pageProps }) {
  return (
  <Theme>
    
    <Component {...pageProps} />)
    </Theme>
  )
}

export default Application
