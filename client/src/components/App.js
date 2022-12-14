import QRCode from 'qrcode'
import '../styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Header from './Header'
import Home from './Home'
import Generator from './Generator'
import Website from './Website'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userLinks, setUserLinks] = useState([])

  console.log("HERE", user)
  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          if (!!user.email) {
            setUser(user)
            setIsLoggedIn(true)
          }
        })
      }
    })
  }, []);

  // const handleAddLink = (newLink) => {
  //   const updatedLinkList = [...user.links, newLink]
  //   setUser(updatedLinkList)
  // }

  console.log('isLog', isLoggedIn)

  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route path='/signup' element={<Signup user={user} setUser={setUser} />} />
          {/* <Route path='/header' element={<Header isLoggedIn={isLoggedIn} />}/> */}
          <Route path='/generator' element={<Generator />} />
          <Route path='/website' element={<Website />} />
          <Route path='/profile' element={<Profile user={user} setUser={setUser}/>} />
          <Route path='/layout' element={<Layout user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;