import '../styles/Home.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {
   let navigate = useNavigate()

   const handleButton = () => {
      navigate('/signup')
   }
   
   const handleCode = () => {
      navigate('/generator')
   }

   return (
      <div className='home'>
         <div className='home-container'>
            <div className='home-text'>
               <h1 style={{ fontSize: "9em", fontFamily: "Caveat" }} className='transfer-animation'> Scan Me! </h1>
            </div>
         </div>
         <div className='home-container-2'>
            <div className='home-container-2a'>
            <h1> Type it. <br></br> <span style={{ color: 'white' }}>Scan</span> it.<br></br><span  >Share</span> it to your friends.</h1>
            </div>
            <div className='home-container-2b'>
               {/* <img src='QR_code.png' width='250' height='250' className='qrCode' /> */}
               <p> Generate your QR Code! <Link to='/generator' style={{textDecoration:'none'}}> here </Link></p>
               <button onClick={handleCode} className='home-button'> Try Now! </button>
            </div>
         </div>
         <div className='home-button-container'>
            <p><span style={{ fontFamily: 'Caveat', fontSize: '6em', verticalAlign: 'super' }}>Sign Up</span><span style={{ fontSize: '1.5em' }}>now to save all your QR codes.</span></p>
            <button onClick={handleButton} className='home-button'> Sign Up</button>
         </div>
      </div>
   )
}

export default Home;