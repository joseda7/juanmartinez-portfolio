import { useState } from 'react'
import srcImgProject from '../../../assets/proceso-grafico-juanmartinez.png'
import srcProcess1 from '../../../assets/process-1.png'
import srcProcess2 from '../../../assets/process-2.png'
import srcProcess3 from '../../../assets/process-3.png'
import srcProcess4 from '../../../assets/process-4.png'
import srcProcess5 from '../../../assets/process-5.png'
import './SectionProcess.scss'
import ReactMarkdown from 'react-markdown'

interface Props {
  nameId: string
  body: Array<any>
}

const SectionProcess = ({nameId, body}:Props) => {

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
          {
            body && body.map((item, index)=>{
              return (
                <li key={index} className={'sectionProcess__detail__item ' + ( selectedItem == (index + 1) ? "sectionProcess__detail__item--active":"")}>
                  { item?.fields?.stepIntroText && <p> { item?.fields?.stepIntroText } </p> }
                  <br />
                  <h3> { item?.fields?.stepTitle } </h3>
                  <ReactMarkdown>
                    { item?.fields?.stepDescription } 
                  </ReactMarkdown>
                </li>
              )
            })
          }
        </ul>
    </section>
  )
}

export default SectionProcess