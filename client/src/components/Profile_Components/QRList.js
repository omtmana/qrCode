import { useState, useEffect } from "react"

const QRList = ({userId, onAddCode, user}) => {
   console.log('userCodes', user.codes)
   const [codeTitle, setCodeTitle] = useState('')
   const [codeImage, setCodeImage] = useState('')

   const handleAddCode = ((e) => {
      e.preventDefault();
      const newCode = {
         'user_id': userId,
         'title': codeTitle,
         'image': codeImage
      }
      fetch('/codes', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newCode)
      })
      .this(res => res.json())
      .this((qrCode) => onAddCode(qrCode))
   })


   return (
      <div>
         <form>
            <input
            type='text'
            placeholder='QR Name'
            value={codeTitle}
            onChange={e => setCodeTitle(e.target.value)}
            />
            <input
            type='text'
            placeholder="QR Image"
            value={codeImage}
            onChange={e => setCodeImage(e.target.value)}
            />
            <button onClick={handleAddCode}> Add QR Code </button>
         </form>
         <ul>
            {
               user?.codes?.map((codes) => {
                  return (
                     <li>
                        <h3>{codes.title}</h3>
                        <img src={codes.image} />
                     </li>
                  )
               })
            }
         </ul>
      </div>
   )
}

export default QRList;