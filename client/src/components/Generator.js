import QRCode from 'qrcode'
// import QRCode from 'react-qr-code'
import { useState, useEffect } from 'react'
import '../styles/Generator.css'
// import CallingQR from './Profile_Components/CallingQR'

const Generator = () => {
   const [url, setUrl] = useState('')
   const [qr, setQr] = useState('')

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

   return (
      <div className="generator">
         <div className='generator-container'>
            <h1 className='qr-name' style={{fontFamily: 'Caveat'}}>QR Generator</h1>
            <input
               type="text"
               placeholder="URL goes here"
               className='qr-input'
               value={url}
               onChange={e => setUrl(e.target.value)} />
            <button onClick={GenerateQRCode} className='generator-button'>Generate</button>
            <div className='qr-image-main-container'>
               {qr && <div className='qr-image-container'>
                  <img src={qr} className='qr-image' />
                  <a href={qr} download="qrcode.png" style={{textDecoration:'none', color: 'orange', fontSize:'1.7em'}}>Download</a>
               </div>
               }
            </div>
         </div>
      </div>
   )
}

// const Generator = () => {
//    const [src, setSrc] = useState('')

//    useEffect(() => {
//       // Qr Code package
//       QRCode.toDataURL().then((data) => {
//          setSrc(data)
//       })
//    }, [])
//    return(
//       <div>
//          {/* <img src={src} /> */}
//          <CallingQR src={src} setSrc={setSrc} />
//       </div>
//    )
// }

export default Generator;