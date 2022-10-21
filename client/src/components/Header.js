import { Link } from 'react-router-dom'
import '../styles/Header.css'
import Check from '../check.jpeg'

const Header = ({ user, setUser, isLoggedIn, setIsLoggedIn}) => {
// console.log('user', user)
   // console.log('login', setIsLoggedIn(user))
   console.log('isLog', isLoggedIn)
   function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
         if (r.ok) {
            setUser(null);
            setIsLoggedIn(false)
         }
      });
   }

   return (
      <div className='header'>
         {/* <img src={Check} width='1800' /> */}
         <Link to='/' style={{textDecoration: 'none', color: 'black'}}> Home </Link>
         {/* <Link to='/generator' style={{ textDecoration: 'none', color: 'black' }}> Generator </Link> */}
         <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> Login </Link>
         <button onClick={handleLogoutClick}> Logout </button>
         <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}> Signup</Link>
         <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}> Profile</Link>
      </div>
   )
}

export default Header;