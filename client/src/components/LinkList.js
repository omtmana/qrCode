import LinkCard from "./LinkCard"

const LinkList = ({links}) => {
   return(
      <ul>
         {
            links.map((links) => {
               return <LinkCard key={links.id} links={links} />
            })
         }
      </ul>
   )
}

export default LinkList;