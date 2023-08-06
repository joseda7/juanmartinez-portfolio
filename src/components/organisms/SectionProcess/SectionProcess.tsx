
import { useState } from 'react'
import srcImgProject from '../../../assets/proceso-grafico-juanmartinez.png'
import './SectionProcess.scss'

interface Props {
  nameId: string
}

const SectionProcess = ({nameId}:Props) => {

  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <section id={ nameId } className="section sectionProcess">
        
        <div className='sectionProcess__img'>
          <div className='sectionProcess__img__cont'>
            <img src={ srcImgProject } alt="Ilustración proceso gráfico Juan Martínez" />
            <span onClick={()=>{setSelectedItem(1)}} style={{right:'52%', bottom:'55%'}}></span>
            <span onClick={()=>{setSelectedItem(2)}} style={{right:'25%', bottom:'55%'}}></span>
            <span onClick={()=>{setSelectedItem(3)}} style={{right:'15%', bottom:'30%'}}></span>
            <span onClick={()=>{setSelectedItem(4)}} style={{right:'40%', bottom:'15%'}}></span>
            <span onClick={()=>{setSelectedItem(5)}} style={{right:'60%', bottom:'30%'}}></span>
          </div>
        </div>
        
        <ul className='sectionProcess__detail'>
          <li className={'sectionProcess__detail__item ' + ( selectedItem == 1 ? "sectionProcess__detail__item--active":"")}>
            <p>
              Aunque cada proyecto es un reto singular, hay algunos pasos que me han funcionado para mantener un flujo de trabajo y una comunicación constante con los clientes. Aquí te los comparto
            </p>
            <br />
            <h3> 1. Diálogo </h3>
            <p> 
              Todo inicia con una conversación. Me interesa escuchar para conocer las características del proyecto, entender las necesidades comunicativas y cuál es el contexto y el formato en el que serán empleadas las ilustraciones o las infografías. 
            </p>
          </li>
          <li className={'sectionProcess__detail__item ' + ( selectedItem == 2 ? "sectionProcess__detail__item--active":"")}>
            <h3> 2. Investigación </h3>
            <p> 
              Una vez conozco las características generales del proyecto comienzo la búsqueda de información. La ilustración científica está respaldada por investigaciones, estudios y datos. Cada especie, proceso o hábitat a ilustrar tiene sus propios desafíos y la precisión es fruto de la documentación y la observación. Muchas veces esta información ya ha sido construida por el cliente. En esta etapa también hago una recolección de referentes gráficos y conceptuales. 
            </p>
          </li>
          <li className={'sectionProcess__detail__item ' + ( selectedItem == 3 ? "sectionProcess__detail__item--active":"")}>
            <h3> 3. Bocetos </h3>
            <p> 
              Esta es para mí una parte esencial del proceso. Luego de la investigación y el diálogo propongo al cliente una imagen en líneas donde se pueda visualizar la composición de la ilustración o el gráfico. En el caso de las especies presento al cliente un boceto donde sean claras las proporciones y las características morfológicas. Recibo comentarios y retroalimentación en conversación con el cliente. 
            </p>
          </li>
          <li className={'sectionProcess__detail__item ' + ( selectedItem == 4 ? "sectionProcess__detail__item--active":"")}>
            <h3> 4. Exploración </h3>
            <p> 
              Me gusta explorar diferentes técnicas de ilustración y elegir la más indicada para la estética y las características de cada proyecto. Las técnicas digitales, la acuarela, la tinta, el grafito, los acrílicos, los lápices de colores, los vectores y los bolígrafos son algunas de las posibilidades con las que he experimentado.
            </p>
          </li>
          <li className={'sectionProcess__detail__item ' + ( selectedItem == 5 ? "sectionProcess__detail__item--active":"")}>
            <h3> 5. Finalización </h3>
            <p> 
              Con las etapas anteriores ya está todo dispuesto para finalizar la imagen. En este momento inicio con el color y la textura, envío una imagen de previsualización al cliente y con su aprobación puedo enviar los archivos digitales definitivos.
            </p>
          </li>
        </ul>
        <div className='separator'></div>
    </section>
  )
}

export default SectionProcess