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
  // const [userLinks, setUserLinks] = useState([])
  const [links, setLinks] = useState([])

  console.log("HERE", user)
  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          if (!!user.email) {
            setUser(user)
          }
        })
      }
    })
  }, []);

  useEffect(() => {
    fetch('/links')
      .then((res) => res.json())
      .then((links) => setLinks(links))
  }, [])

  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login user={user} setUser={setUser} />}/>
          <Route path='/signup' element={<Signup user={user} setUser={setUser} />}/>
          <Route path='/generator' element={<Generator/>}/>
          <Route path='/profile' element={<Profile user={user} setUser={setUser} links={links} setLinks={setLinks}/>}/>
          <Route path='/layout' element={<Layout user={user} setUser={setUser}/>} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;