import ProfileContainer from "./Profile_Components/ProfileContainer";
import '../styles/Profile.css'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import LinkList from "./Profile_Components/LinkList";
import QRList from "./Profile_Components/QRList";

const Profile = ({ user, setUser}) => {
   const navigate = useNavigate()
   // console.log('CurrentUser', user)
   console.log('userLinks', user.links)
   
   const handleCodeClick = () => {
      navigate('/generator')
   }
   
   const handleAddLink = (newLink) => {
      const updatedLinkList = [...user?.links, newLink]
      setUser(updatedLinkList)
   }

   const handleAddCode = (newCode) => {
      const updatedCodeList = [...user?.links, newCode]
      setUser(updatedCodeList)
   }
   
   // const userLinks = user?.links?.map((links) => {
   //    return (
   //    <li>
   //       <h1>{links.link_title}</h1>
   //       <h3>{links.link_url}</h3>
   //    </li>
   //    )
   // })



   return (
      <div className="profile">
         <div className="profile-user-container">
            <img src={user.profile_pic} width='200' />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
         </div>
         <div className="profile-links-container">
            <h3> My Favorite Links </h3>
            <LinkList key={user.id} userId={user.id} onAddLink={handleAddLink} user={user}/>
            {/* <ul> {userLinks}</ul> */}
            {/* <ul>
            {
               user?.links?.map((links) => {
                  return (
                     <li> 
                        <h3>{links.link_title}</h3>
                        <h4>{links.link_url}</h4> 
                     </li>

                  )
               })
            }

            </ul> */}
         </div>
         <div className="profile-codes-container">
            <h3> My QR Codes </h3>
            <QRList userId={user.id} onAddCode={handleAddCode}/>
            <button onClick={handleCodeClick} className=""> Generate New QR Code</button>
         </div>

      </div>
   )
}

export default Profile;