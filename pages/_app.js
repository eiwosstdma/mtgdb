import '@/styles/globals.css'
import '@picocss/pico'
import Layout from '@/components/layout.jsx'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
