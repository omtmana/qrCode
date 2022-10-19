import ProfileContainer from "./Profile_Components/ProfileContainer";
import '../styles/Profile.css'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import LinkList from "./Profile_Components/LinkList";

const Profile = ({ user, setUser }) => {
   const [title, setTitle] = useState('')
   const [url, setUrl] = useState('')
   const [links, setLinks] = useState([])

   const navigate = useNavigate()

   // console.log('CurrentUser', user)
   // console.log('userLinks', user.links)

   const handleCodeClick = () => {
      navigate('/generator')
   }
   
   const userLinks = user.links.map((links) => {
      // console.log(links)
      return (
      <li>
         <h1>{links.link_title}</h1>
         <h3>{links.link_url}</h3>
      </li>
      )
   })

   const handleNewCode = ((e) => {
      e.preventDefault();
      const newLink = {
         'link_title': title,
         'link_url': url
      }
      fetch('/links', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newLink)
      })
         .this(res => res.json())
         .this(link => setLinks(link))
   })



   return (
      <div className="profile">
         <div className="profile-user-container">
            <img src={user.profile_pic} width='200' />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
         </div>
         <div className="profile-links-container">
            <h3> My Favorite Links </h3>
            <form>
               <input
                  type='text'
                  placeholder="Link Title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
               />
               <input
                  type='text'
                  placeholder="Link's URL"
                  value={url}
                  onChange={e => setUrl(e.target.value)}
               />
               <button onSubmit={handleNewCode}>Add Code</button>
            </form>
            <ul> {userLinks}</ul>
         </div>
         <div className="profile-codes-container">
            <h3> My QR Codes </h3>
            <button onClick={handleCodeClick} className=""> Generate New QR Code</button>
         </div>

      </div>
   )
}

export default Profile;