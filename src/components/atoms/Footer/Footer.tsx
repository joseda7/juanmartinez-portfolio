import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <p className='footer__txt'>
          Juan Felipe Martínez Tirado · Diseñador gráfico e Ilustrador
        </p> 
        <p className='footer__txt'> 
          Sitio por 
          <span>
            <a target='_blank' href='https://biodiverzo.com/jose-alcaraz/'> Jose Alcaraz </a> 
          </span>
        </p>
    </footer>
  )
}

export default Footer