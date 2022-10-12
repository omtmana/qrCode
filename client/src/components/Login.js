import '../styles/Login.css'
import { useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({ user, setUser }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()

   const handleSubmit = ((e) => {
      e.peventDefault()
      const formData = {
         'email': email,
         'password': password,
      }
      fetch('/login', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then((data) => console.log('data', data))
   })

   return (
      <div className="login">
         <div className='login-form'>
            <h1 style={{ fontSize: "2.2em", fontFamily: "Caveat", fontWeight: "900" }} > Login </h1>
            <form onSubmit={handleSubmit}>
               <div>
                  <input type='text'
                     placeholder="Email"
                     className="login-email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>
               <div>
                  <input type='password'
                     placeholder="Password"
                     className="login-password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               </div>
            <button className='login-submit-button'> Submit </button>
            </form>
            <p style={{ fontSize: '12px', color: '#349BBC' }}>Forgot email or password?</p>
            <p style={{ fontSize: '12px' }}> Don't have account? <span style={{ fontSize: '12px', color: '#349BBC' }}>Sign up!</span> </p>
         </div>
      </div>
   )
}

export default Login;