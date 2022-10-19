import LinkCard from "./LinkCard";

const LinkList = ({user, links}) => {
   const {link_url, link_title} = links
   console.log(links)
   return(
      <li>
         <h4>{user.links.link_title}</h4>
      </li>
   )
}

export default LinkList;