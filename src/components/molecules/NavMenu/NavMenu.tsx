import "./NavMenu.scss"

interface Props {
    items: Array<any>
}

function NavMenu({items}:Props) {
  return (
    <nav className="nav">
        <ul>
            {
                items?.map((item:any, index:number) => {
                return(
                    <li key={index}> 
                        <a href={'#' + item.sectionTitle.toLowerCase()}>
                        {item.sectionTitle.toUpperCase()} 
                        </a>
                    </li>
                )})
            }
        </ul> 
    </nav>
  )
}

export default NavMenu