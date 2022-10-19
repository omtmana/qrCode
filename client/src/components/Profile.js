import ProfileContainer from "./Profile_Components/ProfileContainer";
import '../styles/Profile.css'
import { useState, useEffect } from 'react'
import LinkList from "./Profile_Components/LinkList";

const Profile = ({ user, setUser }) => {
   const [title, setTitle] = useState('')
   const [url, setUrl] = useState('')
   const [links, setLinks] = useState([])

   console.log('CurrentUser', user)
   console.log('userLinks', user.links)

   const userLinks = user.links.map((links) => {
      // console.log(links)
      return (<li>
         <h1>{links.link_title}</h1>
         <h3>{links.link_url}</h3>
      </li>)
   })

   useEffect(() => {
      fetch('/links')
         .then((res) => res.json())
         .then((links) => console.log('links',links))
   }, [])

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

   const handleCodeClick = () => {

   }


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
            {/* <ul>
               {
                  links.map((links) => {
                     return <LinkList key={links.id} links={links}/>
                  })
               }
            </ul> */}
         </div>
         <div className="profile-codes-container">
            <h3> My QR Codes </h3>
            <button onClick={handleCodeClick} className=""> Generate New QR Code</button>
         </div>

      </div>
   )
}

export default Profile;