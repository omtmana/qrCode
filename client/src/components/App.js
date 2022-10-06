import QRCode from 'qrcode'
import '../styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Header from './Header'
import Home from './Home'
import Generator from './Generator'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import {useState, useEffect} from 'react'

const App = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then((user) => setUser(user))
  })

  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/generator' element={<Generator/>}/>
          <Route path='/profile' element={<Profile user={user} setUser={setUser} />}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;