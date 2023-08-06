import srcFoto from '../../../assets/foto-juanmartinez.jpg'
import srcCostumer1 from '../../../assets/costumer-agrosavia.png'
import srcCostumer2 from '../../../assets/costumer-humboldt.png'
import srcCostumer3 from '../../../assets/costumer-invesa.png'
import srcCostumer4 from '../../../assets/costumer-quinti.png'
import srcCostumer5 from '../../../assets/costumer-cepal.png'
import './SectionAbout.scss'

interface Props {
  nameId: string
}

const SectionAbout = ({nameId}:Props) => {
  return (
    <>
      <section id={nameId} className="section sectionAbout">
          <div className='sectionAbout__cont'>
            <p>
              Soy Diseñador gráfico e ilustrador con experiencia en ilustración figurativa, infografía e ilustración científica y naturalista de animales, plantas y escenarios.
              Desde el 2016 he trabajado como independiente en proyectos relacionados con biodiversidad, conservación, divulgación de la ciencia, educación ambiental, investigaciones en agronomía e iniciativas territoriales.
              Mis estudios en diseño gráfico me han permitido comprender las necesidades comunicativas de cada proyecto y proponer soluciones que se han materializado en diferentes formatos editoriales, exposiciones museográficas y formatos digitales como sitios web y aplicativos móviles. El trabajo conjunto con personas expertas y la exploración de técnicas pictóricas tanto análogas como digitales son aspectos importantes de mi trabajo.
              Vivo y trabajo en Medellín, Colombia.
            </p>
            <br />
            <br />
            <p> 
              <b>
                Mi trabajo resulta de combinar mi fascinación por el mundo natural con el arte y el diseño. Hago lo que hago para celebrar la vida en el planeta y tratar de despertar (en mí y en otras personas) sensibilidades que nos permitan recordar que somos parte del imbricado árbol de la vida y que compartimos este planeta con otros seres hermosamente complejos.
              </b>
            </p>
          </div>
          <div className='sectionAbout__img'>
            <img src={srcFoto} alt="Fotografía Juan Martínez" />
          </div>      
      </section>

      <section className="section sectionCustomers">
        <h2>Clientes</h2>
        <p>Detrás de estos nombres hay personas que han confiado en mi para trabajar en sus proyectos, a ellas mi agradecimiento.</p>
        <ul className='sectionCustomers__list'>
          <li>
            <img src={srcCostumer1} alt="Logotipo cliente Juan Martínez" />
          </li>
          <li>
            <img src={srcCostumer2} alt="Logotipo cliente Juan Martínez" />
          </li>
          <li>
            <img src={srcCostumer3} alt="Logotipo cliente Juan Martínez" />
          </li>
          <li>
            <img src={srcCostumer4} alt="Logotipo cliente Juan Martínez" />
          </li>
          <li>
            <img src={srcCostumer5} alt="Logotipo cliente Juan Martínez" />
          </li>
        </ul>
      </section>
    </>
  )
}

export default SectionAbout