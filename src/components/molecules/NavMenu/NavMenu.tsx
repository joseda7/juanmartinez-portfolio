import { useEffect, useState } from 'react'
import logoSrc from "./../../../assets/logotype-juanmartinez.svg"
import "./NavMenu.scss"
import { normalizeString } from '../../../utils/strings'

interface Props {
    items: Array<any>
}

const NavMenu = ({items}:Props) => {

    const [isNavSticky, setIsNavSticky] = useState<boolean>(false);
    const [isItemActive, SetIsItemActive] = useState<number>(-1);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition > (windowHeight - 150)) {
            setIsNavSticky(true); 
        } else {
            setIsNavSticky(false); 
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <nav className={'nav ' + (isNavSticky?'nav--sticky':'')} >
            <a className='nav__logo' href="#home">
                <img src={logoSrc} alt="Juan Martínez Logotype" />
            </a>
            <ul className='nav__items'>
                {
                    items?.map((item:any, index:number) => {
                    return(
                        <li key={index} 
                            className = {item.sectionTitle.toLowerCase() == "conversemos" ? '--highlight':''}> 
                            <a className={isItemActive == index ? "nav--active":""} href={'#' + normalizeString(item.sectionTitle)} onClick={()=>{ SetIsItemActive(index) }}>
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