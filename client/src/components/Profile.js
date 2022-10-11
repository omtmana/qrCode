import ProfileContainer from "./ProfileContainer";
import '../styles/Profile.css'
import {useState} from 'react'

const Profile = ({ user, setUser}) => {
   const [searchLink, setSearchLink] = useState('')
   // const person = {
   //    user.map((user) => {
   //       return <ProfileContainer key={user.id} user={user} />
   //    })
   // }
   
   return (
      <div className="profile">
         <div className="profile-search">
            <form>
               <input
                  type='text'
                  value={searchLink}
                  className='input-link'
                  onChange={e => setSearchLink(e.target.value)}
                  placeholder='Search Links'
               />
            </form>
         </div>
         <div className="profile-name-container">
         {
            user.map((user) => {
               return <ProfileContainer key={user.id} user={user} />
            })
         }
         </div>
         {/* <div>
            {
               user.map((user) => {
                  return <LinksContainer />
               })
            }
         </div> */}
      </div>
   )
}

export default Profile;