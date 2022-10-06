import ProfileContainer from "./ProfileContainer";
import '../styles/Profile.css'

const Profile = ({ user, setUser}) => {
   return (
      <div className="profile">
         {
            user.map((user) => {
               return <ProfileContainer key={user.id} user={user} />
            })
         }
      </div>
   )
}

export default Profile;