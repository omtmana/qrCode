import Header from '../components/Header'
import Footer from './Footer'
// import Footer from "./sub-components/Footer";
import '../styles/Layout.css'

const Layout = ({children, user, setUser}) => {
   return (
      <>
         <Header user={user} setUser={setUser} />
         <main>{children}</main>
         <Footer />
      </>

   )
}
export default Layout;