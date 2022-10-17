import Header from '../components/Header'
import Footer from './Footer'
// import Footer from "./sub-components/Footer";
import '../styles/Layout.css'

const Layout = ({children}) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>

   )
}
export default Layout;