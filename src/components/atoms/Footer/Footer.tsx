import './Footer.scss'
import iconJoseAlcaraz from '../../../assets/jose-alcaraz.ico'

const Footer = () => {
  return (
    <footer className='footer'>
        <p className='footer__txt'>
          <span>© 2024 | Todos los derechos reservados |</span> Juan Felipe Martínez Tirado • Diseñador gráfico e ilustrador.
        </p> 
        <p className='footer__txt'> 
          <span>
            <a target='_blank' href='https://biodiverzo.com/jose-alcaraz/'> 
              #CodeWithPurpose <span>x <img src={iconJoseAlcaraz} alt="Icono Jose Alcaraz Dev" /></span>
            </a> 
          </span>
        </p>
    </footer>
  )
}

export default Footer