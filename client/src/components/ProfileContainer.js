import '../styles/Profile.css'

const ProfileContainer = ({ user }) => {
   const { name, email } = user
   return (
      <div className="profileContainer">
            <h1 className='profile-name'>{name}</h1>
         <div className="profile-links">
         </div>
      </div>
   )
}

export default ProfileContainer;