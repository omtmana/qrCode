import ProfileContainer from "./Profile_Components/ProfileContainer";
import '../styles/Profile.css'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, Link } from "react-router-dom";
import LinkList from "./Profile_Components/LinkList";
import QRList from "./Profile_Components/QRList";

const Profile = ({ user, setUser }) => {
   // const [links, setLinks] = useState([])
   const navigate = useNavigate()
   // console.log('CurrentUser', user)
   // console.log('userLinks', user.links)

   const handleCodeClick = () => {
      navigate('/generator')
   }

   const handleAddLink = (newLink) => {
      const updatedLinkList = [...user?.links, newLink]
      setUser(updatedLinkList)
   }

   const handleAddQRCode = (newCode) => {
      const updatedCodeList = [...user?.codes, newCode]
      setUser(updatedCodeList)
   }


   return (
      <div className="profile">
         <div className="profile-user-container">
            <img src={user.profile_pic} width='200' />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            {/* <p>{user.link}</p> */}
         </div>
         <div className="profile-links-container">
            <h3> My Favorite Links </h3>
            <LinkList key={user.id} userId={user.id} onAddLink={handleAddLink} user={user} />
         </div>
         <div className="profile-codes-container">
            <h3> My QR Codes </h3>
            <QRList key={user.id} userId={user.id} onAddCode={handleAddQRCode} user={user} />
            <button onClick={handleCodeClick} className=""> Generate New QR Code</button>
            {/* <Link to='/generator'> Generate New QR Code</Link> */}
         </div>

      </div>
   )
}

export default Profile;