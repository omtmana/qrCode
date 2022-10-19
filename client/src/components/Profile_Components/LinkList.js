import LinkCard from "./LinkCard";
import { useState } from "react";

const LinkList = ({ userId, onAddLink}) => {
   const [title, setTitle] = useState('')
   const [url, setUrl] = useState('')
   const [links, setLinks] = useState([])

   const handleNewLink = ((e) => {
      e.preventDefault();
      const newLink = {
         'user_id': userId,
         'link_title': title,
         'link_url': url
      }
      fetch('/links', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newLink)
      })
         .this(res => res.json())
         .this(link => onAddLink(link))
   })


   return (
      <div>
         <form>
            <input
               type='text'
               placeholder="Link Title"
               value={title}
               onChange={e => setTitle(e.target.value)}
            />
            <input
               type='text'
               placeholder="Link's URL"
               value={url}
               onChange={e => setUrl(e.target.value)}
            />
            <button onClick={handleNewLink}>Add Code</button>
         </form>
      </div>
   )
}

export default LinkList;