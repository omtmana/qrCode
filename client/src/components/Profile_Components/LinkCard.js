const LinkCard = ({links}) => {
   const {link_url, link_title} = links

   return (
      <li>
         <h1>{link_title}</h1>
         <p>{link_url}</p>
      </li>
   )
}

export default LinkCard;