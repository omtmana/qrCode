import '../styles/Home.css'

const Home = () => {
   return (
      <div className='home'>
         <div className='home-container'>
            <div className='home-1'> 1 </div>
            <div className='home-2'> 2 </div>
            <div className='home-3'> 3 </div>
            <div className='home-text'>
            <h1 style={{ fontSize: "9em", fontFamily: "Caveat" }} className='transfer-animation'> Scan Me! </h1>
            </div>
            <div className='home-4'> 4 </div>
            <div className='home-5'> 5 </div>
            <div className='home-6'> 6 </div>
         </div>
            <div className='home-container-2'>
            <h1> Type It. <br></br> Scan it.<br></br> Share it to your friends</h1>
            </div>
      </div>
   )
}

export default Home;