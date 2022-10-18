import ProfileContainer from "./ProfileContainer";
import '../styles/Profile.css'
import {useState} from 'react'

const Profile = ({ user }) => {
   const handleNewCode = ((e) => {
      e.preventDefault();
      
   })
   return (
      <div className="profile">
         <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <img src={user.profile_pic} width='200'/>
         </div>
         <div>
            <form>
               <input
               type='text'
               placeholder="New Link"
               />
               <button onSubmit={handleNewCode}>Add Code</button>
            </form>
         </div>
      </div>
   )
}

export default Profile;