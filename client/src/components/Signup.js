import '../styles/Signup.css'
import { useState } from 'react'

const Signup = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [profilePic, setProfilePic] = useState('')

   const handleSubmit = ((e) => {
      e.preventDefault();
   })

   return (
      <div className='signup'>
         <div className='signup-container'>
            <h1> Sign up! </h1>
            <form>
               <div>
               <input
                  type='text'
                  placeholder='Name'
                  className='signup-name'
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               </div>
               <div>
               <input
                  type='text'
                  placeholder='Email'
                  className='signup-email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               </div>
               <div>
               <input
                  type='text'
                  placeholder='Password'
                  className='signup-password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               </div>
               <div>
               <input
                  type='text'
                  placeholder='Profile Pic'
                  className='signup-pic'
                  value={profilePic}
                  onChange={e => setProfilePic(e.target.value)}
               />
               </div>
            </form>
            <button onSubmit={handleSubmit} className='signup-button'> Sign Up </button>
         </div>
      </div>
   )
}

export default Signup;