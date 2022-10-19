import QRCode from 'qrcode'
// import QRCode from 'react-qr-code'
import { useState, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import '../styles/Generator.css'
// import CallingQR from './Profile_Components/CallingQR'

const Generator = () => {
   const [url, setUrl] = useState('')
   const [qr, setQr] = useState('')
   const navigate = useNavigate()
   const GenerateQRCode = () => {
      QRCode.toDataURL(url, {
         width: 800,
         margin: 2,
         color: {
            dark: '#335383FF',
            light: '#EEEEEEFF'
         }
      }, (err, url) => {
         if (err) return console.error(err)

         console.log(url)
         setQr(url)
      })
   }

   const handleWebDivClick = () => {
      navigate('/website')
   }
   return (
      <div className='generator'>
         <h1> QR Code Generator </h1>
         <div className='generator-main'>
            {/* button like. when you click it, it directs you to the form of qr generator */}
            <div className='generator-web-container' onClick={handleWebDivClick}>
               <h4> Website </h4>
            </div>
            <div className='generator-card-container'>
               <h4> Personal Information</h4>
            </div>
            {/* future Qr code Generator */}
            <div className='generator-soon-container'>
               <h4> Comming Soon: PDF </h4>
            </div>
            <div className='generator-soon-container'>
               <h4> Coming Soon: Images </h4>
            </div>
            <div className='generator-soon-container'>
               <h4> Coming Soon: Wi-Fi </h4>
            </div>
            <div className='generator-soon-container'>
               <h4> Coming Soon: WhatsApp</h4>
            </div>
            <div className='generator-soon-container'>
               <h4> Coming Soon: Socials</h4>
            </div>
            <div className='generator-soon-container'>
               <h4> Coming Soon: Call </h4>
            </div>
         </div>
      </div>
   )

}


export default Generator;
// return (
//    <div className="generator">
//       <div className='generator-container'>
//          <h1 className='qr-name' style={{fontFamily: 'Caveat'}}>QR Generator</h1>
//          <input
//             type="text"
//             placeholder="URL goes here"
//             className='qr-input'
//             value={url}
//             onChange={e => setUrl(e.target.value)} />
//          <button onClick={GenerateQRCode} className='generator-button'>Generate</button>
//          <div className='qr-image-main-container'>
//             {qr && <div className='qr-image-container'>
//                <img src={qr} className='qr-image' />
//                <a href={qr} download="qrcode.png" style={{textDecoration:'none', color: 'orange', fontSize:'1.7em'}}>Download</a>
//             </div>
//             }
//          </div>
//       </div>
//    </div>
// )