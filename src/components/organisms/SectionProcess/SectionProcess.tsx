import { useState } from 'react'
import srcImgProject from '../../../assets/proceso-grafico-juanmartinez.png'
import srcProcess1 from '../../../assets/process-1.png'
import srcProcess2 from '../../../assets/process-2.png'
import srcProcess3 from '../../../assets/process-3.png'
import srcProcess4 from '../../../assets/process-4.png'
import srcProcess5 from '../../../assets/process-5.png'
import './SectionProcess.scss'

interface Props {
  nameId: string
}

const SectionProcess = ({nameId}:Props) => {

  const [selectedItem, setSelectedItem] = useState<number>(1);
  const [hoverItem, setHoverItem] = useState<number>(1);

  return (
    <section id={ nameId } className="section sectionProcess">
        
        <div className='sectionProcess__img'>
          <div className='sectionProcess__img__cont'>
            <img className='sectionProcess__img__cont__graph' src={ srcImgProject } alt="Ilustración proceso gráfico Juan Martínez" />
            <img className={'sectionProcess__img__cont__portion ' + (selectedItem == 1 || hoverItem == 1 ? 'sectionProcess__img__cont__portion--active':'')} 
              src={ srcProcess1 } 
              style={{width:'41%', right:'46.3%', bottom:'47.3%'}} 
              alt="Imagen proceso paso 1" />
            <img className={'sectionProcess__img__cont__portion ' + (selectedItem == 2 || hoverItem == 2 ? 'sectionProcess__img__cont__portion--active':'')}
              src={ srcProcess2 } 
              style={{width:'47%', right:'1.5%', bottom:'47.5%'}} 
              alt="Imagen proceso paso 2" />
            <img className={'sectionProcess__img__cont__portion ' + (selectedItem == 3 || hoverItem == 3 ? 'sectionProcess__img__cont__portion--active':'')} 
              src={ srcProcess3 } 
              style={{width:'45.2%', right:'1.7%', bottom:'5%'}} 
              alt="Imagen proceso paso 3" />
            <img className={'sectionProcess__img__cont__portion ' + (selectedItem == 4 || hoverItem == 4 ? 'sectionProcess__img__cont__portion--active':'')} 
              src={ srcProcess4 } 
              style={{width:'53%', right:'26%', bottom:'4%'}} 
              alt="Imagen proceso paso 4" />
            <img className={'sectionProcess__img__cont__portion ' + (selectedItem == 5 || hoverItem == 5 ? 'sectionProcess__img__cont__portion--active':'')} 
              src={ srcProcess5 } 
              style={{width:'47%', right:'51.4%', bottom:'14%'}} 
              alt="Imagen proceso paso 5" />
            {/* ------------------------------------------------------------------------------------------- */}
            <span onMouseEnter={()=>{setHoverItem(1)}} onMouseLeave={()=>{setHoverItem(selectedItem)}}
              onClick={()=>{setSelectedItem(1)}} 
              style={{right:'7%', bottom:'6%', transform:'rotate(144deg)'}}>  
            </span>
            <span onMouseEnter={()=>{setHoverItem(2)}} onMouseLeave={()=>{setHoverItem(selectedItem)}}
              onClick={()=>{setSelectedItem(2)}} 
              style={{right:'0%', bottom:'6%', transform:'rotate(216deg)'}}>
            </span>
            <span onMouseEnter={()=>{setHoverItem(3)}} onMouseLeave={()=>{setHoverItem(selectedItem)}}
              onClick={()=>{setSelectedItem(3)}} 
              style={{right:'-2%', bottom:'-1%', transform:'rotate(288deg)'}}>
            </span>
            <span onMouseEnter={()=>{setHoverItem(4)}} onMouseLeave={()=>{setHoverItem(selectedItem)}}
              onClick={()=>{setSelectedItem(4)}} 
              style={{right:'4%', bottom:'-5%', transform:'rotate(0deg)'}}>  
            </span>
            <span onMouseEnter={()=>{setHoverItem(5)}} onMouseLeave={()=>{setHoverItem(selectedItem)}}
              onClick={()=>{setSelectedItem(5)}} 
              style={{right:'10%', bottom:'-1%', transform:'rotate(73deg)'}}>
            </span>
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