import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
<<<<<<< HEAD
    <ThemeProvider>
=======
    <ThemeProvider attribute='class'>
>>>>>>> first-step
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
