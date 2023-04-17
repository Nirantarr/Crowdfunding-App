import '@/styles/globals.css'
import {Footer,Navbar} from 'components/index.js';
import { CrowdFundingProvider } from 'context/Crowdfunding.js';
export default function App({ Component, pageProps }) {
  return (
  <>
  <CrowdFundingProvider>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </CrowdFundingProvider>
  </>)
}
