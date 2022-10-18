import ProfileContainer from "./Profile_Components/ProfileContainer";
import '../styles/Profile.css'
import { useState, useEffect} from 'react'
import LinkList from "./Profile_Components/LinkList";

const Profile = ({ user}) => {
   const [title, setTitle] = useState('')
   const [url, setUrl] = useState('')
   const [links, setLinks] = useState([])

   useEffect(() => {
      fetch('/links')
         .then((res) => res.json())
         .then((links) => setLinks(links))
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


   return (
      <div className="profile">
         <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <img src={user.profile_pic} width='200' />
         </div>
         <div>
            <form>
               <input
                  type='text'
                  placeholder="New Link"
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
         </div>
               {/* <LinkList links={links}/> */}
      </div>
   )
}

export default Profile;