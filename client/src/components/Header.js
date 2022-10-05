import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div>
         <Link to='/'> Home </Link>
         <Link to='/generator'> Generator </Link>
         <Link to='/login'> Login </Link>
         <Link to='/signup'> Signup</Link>
      </div>
   )
}

export default Navbar;