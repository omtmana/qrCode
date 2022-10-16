import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   let navigate = useNavigate()

   const handleButton = () => {
      navigate('/signup')
   }

   return (
      <div className='home'>
         <div className='home-container'>
            {/* <div className='home-1'> 1 </div>
            <div className='home-2'> 2 </div>
            <div className='home-3'> 3 </div> */}
            <div className='home-text'>
               <h1 style={{ fontSize: "9em", fontFamily: "Caveat" }} className='transfer-animation'> Scan Me! </h1>
            </div>
            {/* <div className='home-4'> 4 </div>
            <div className='home-5'> 5 </div>
            <div className='home-6'> 6 </div> */}
         </div>
         <div className='home-container-2'>
            <h1> Type It. <br></br> Scan it.<br></br> Share it to your friends</h1>
         </div>
         <div className='home-button-container'>
            <p><span style={{fontFamily:'Caveat', fontSize:'6em'}}>Sign Up</span> now to save all your QR codes.</p>
            <button onClick={handleButton} className='home-button'> Sign Up</button>
         </div>
      </div>
   )
}

export default Home;