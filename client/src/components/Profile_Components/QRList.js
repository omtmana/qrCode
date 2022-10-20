const QRList = ({userId, handleAddCode}) => {
   return (
      <div>
         <form>
            <input
            type='text'
            placeholder='QR Name'
            />
            <input
            type='text'
            placeholder="QR Image"
            />
         </form>
      </div>
   )
}

export default QRList;