import { useEffect, useState } from 'react'
import logoSrc from "./../../../assets/logotype-juanmartinez.svg"
import "./NavMenu.scss"

interface Props {
    items: Array<any>
}

const NavMenu = ({items}:Props) => {

    const [isNavSticky, setIsNavSticky] = useState<boolean>(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition > (windowHeight - 100)) {
            setIsNavSticky(true); 
        } else {
            setIsNavSticky(false); 
        }
        // console.log(scrollPosition);
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
            <a className='nav__logo' href="/">
                <img src={logoSrc} alt="Juan Martínez Logotype" />
            </a>
            <ul className='nav__items'>
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