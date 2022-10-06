import '../styles/Profile.css'

const ProfileContainer = ({ user }) => {
   const { name, email } = user
   return (
      <div className="profileContainer">
         <div className="profile-header">
            <h1>{name}</h1>
         </div>
         <div className="profile-links">
         </div>
      </div>
   )
}

export default ProfileContainer;