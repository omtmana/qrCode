import QRCode from 'qrcode'
import { useState } from 'react'
import '../styles/Generator.css'

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
            <h1 className='qr-name'>QR Generator</h1>
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
                  <a href={qr} download="qrcode.png">Download</a>
               </div>
               }
            </div>
         </div>
      </div>
   )
}

export default Generator;