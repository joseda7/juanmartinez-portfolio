import srcContactImg from '../../../assets/contact-birds.png'
import './SectionContact.scss'

interface Props {
  nameId: string
}

const SectionContact = ({nameId}:Props) => {
  return (
    <section id={nameId} className="section sectionContact">
        <div className='sectionContact__cont'>
          <p> ¿Tienes en mente algún proyecto en el que podamos trabajar juntos? Conversemos </p>
          <a className="sectionContact__cont__email" href="mailto:martinezilustracion@gmail.com?Subject=¡Trabajemos%20juntos!">martinezilustracion@gmail.com</a>
          <ul>
            <li> 
              <a href=""> Instagram </a>
            </li>
            <li>
              <a href=""> Behance </a>
            </li>
            <li>
              <a href=""> Twitter </a>
            </li>
            <li>
              <a href=""> LinkedIn </a>
            </li>
          </ul>
        </div>
        <img className='sectionContact__img' src={srcContactImg} alt="Ilustración de contacto" />
    </section>
  )
}

export default SectionContact