import srcContactImg from '../../../assets/contact-birds.webp'
import './SectionContact.scss'

interface Props {
  nameId: string
  body: Array<any>
}
  
const SectionContact = ({nameId, body}:Props) => {
  
  const contactBody = body ? body[0]?.fields : null ;
  
  return (
    <section id={nameId} className="section sectionContact">
        <h2 className='--show-on-tablet'>
          {nameId}
        </h2>
        <div className='sectionContact__body'>
          <div className='sectionContact__cont'>
            <p><strong> { contactBody?.description } </strong></p>
            <a className="sectionContact__cont__email" href={`mailto:${contactBody?.email}?Subject=¡Trabajemos%20juntos!`}>martinezilustracion@gmail.com</a>
            <ul className="sectionContact__cont__social">
              <li> 
                <a href={ contactBody?.instagramLink } target='_blank'> Instagram </a>
              </li>
              <li>
                <a href={ contactBody?.behanceLink } target='_blank'> Behance </a>
              </li>
              <li>
                <a href={ contactBody?.linkedinLink } target='_blank'> LinkedIn </a>
              </li>
            </ul>
          </div>
        </div>
        <img className='sectionContact__img' src={srcContactImg} alt="Ilustración de contacto" />
    </section>
  )
}

export default SectionContact