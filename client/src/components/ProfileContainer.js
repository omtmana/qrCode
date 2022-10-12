import '../styles/Profile.css'

const ProfileContainer = ({ user }) => {
   const { name, email} = user
   return (
      <div className="profileContainer">
         <p> {name} </p>
         <p> {email}</p>
      </div>
   )
}

export default ProfileContainer;