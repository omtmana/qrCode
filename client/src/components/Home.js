import '../styles/Home.css'

const Home = () => {
   return (
      <div className='home'>
         <div className='home-container'>
            <div className='home-text'>
            <h1 style={{ fontSize: "3.5em", fontFamily: "Caveat" }} className='transfer-animation'> Scan Me! <span className='transfer-animation'> </span></h1>
            </div>
            {/* <div>
               <img src='qrCode.webp' className='home-image'/>
            </div> */}
         </div>
      </div>
   )
}

export default Home;