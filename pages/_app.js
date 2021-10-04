import '../styles/globals.css'
import Container from './FormComps/container'
import Layout from './FormComps/Layout'
import NavbarForm from './FormComps/NavbarForm'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
