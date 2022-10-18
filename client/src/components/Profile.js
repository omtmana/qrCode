import ProfileContainer from "./ProfileContainer";
import '../styles/Profile.css'
import {useState} from 'react'

const Profile = ({ user }) => {
   const{name, email, profile_pic} = user
   const [searchLink, setSearchLink] = useState('')
   
   console.log(user)
   return (
      <div className="profile">
         {/* <p>{name}</p> */}
      </div>
   )
}

export default Profile;