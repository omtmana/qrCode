import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <div>
         <Link to='/' style={{textDecoration: 'none', color: 'black'}}> Home </Link>
         <Link to='/generator' style={{ textDecoration: 'none', color: 'black' }}> Generator </Link>
         <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}> Login </Link>
         <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}> Signup</Link>
         <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}> Profile</Link>
      </div>
   )
}

export default Header;