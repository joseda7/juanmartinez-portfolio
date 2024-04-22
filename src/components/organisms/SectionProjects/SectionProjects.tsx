import { useState } from "react"
import { Project } from "../../../interfaces/interfaces"
import Slider from "react-slick"
import Icon from "../../atoms/Icon/Icon"
import "./SectionProjects.scss"

interface Props {
    nameId: string
    projects?: Array<any>
}

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false
};

const SectionProjects = ( {nameId, projects}:Props ) => {

    const [openModal, setOpenModal] = useState(false);
    const [activeProject, setActiveProject] = useState<Project>();

    function handleActiveProject ( _item:any ) {
        setActiveProject(_item);
        handleOpenModal(true);
        // console.log(_item);
    }

    function handleOpenModal ( isOpen:boolean ) {
        const body = document.body;
        isOpen ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";
        setOpenModal(isOpen);
    }

    return (
        <section 
                id={ nameId } 
                className="section sectionProjects" 
                style={ {backgroundColor:"white"} }>

            <h2 className='--show-on-tablet'>
                {nameId}
            </h2>        
            
            <div className="sectionProjects__body">
                <ul className="sectionProjects__cont">
                    {
                        projects && projects?.map(( item:any, index:number )=>{
                        var project:Project = item.fields;
                        return (
                            <li className="sectionProjects__item" 
                                key = { index } 
                                onClick = { ()=>{ handleActiveProject( item.fields ) }}>
                                <div className="sectionProjects__item__info">
                                    <h3> { project.projectTitle } </h3>
                                    <p> { project.projectYear } </p>
                                </div>
                                <img
                                    src = { project.projectThumbnail.fields.file.url } 
                                    alt = { project.projectThumbnail.fields.description } />
                                <div className="sectionProjects__item__filter"></div> 
                            </li>
                        )})
                    }
                </ul>
            </div>
            

            {
                openModal && (
                    <div className="modal">
                        <div id='modal-click-area' onClick={()=>{ handleOpenModal(false) }}></div>
                        <div className="modal__cont">
                            <div className="modal__cont__info">
                                <h3> { activeProject?.projectTitle } </h3>
                                <br />
                                <p> 
                                    <b>Cliente:</b> { activeProject?.projectCustomer } |
                                    <b> Año:</b> { activeProject?.projectYear } 
                                </p>
                                <p> <b>Rol:</b> { activeProject?.projectRole } </p>
                                <p> <b>Técnicas:</b> { activeProject?.projectTechniques } </p> 
                                <br/>
                                <div className="separator-sm"></div>
                                <br/>
                                <p> { activeProject?.projectDescription } </p> <br />
                                {
                                    activeProject?.projectLink && (    
                                        <a target="_blank" href={activeProject?.projectLink}> 
                                            Explora el proyecto 
                                        </a>
                                    )
                                }
                            </div>
                            <div className="modal__cont__slider">
                                <Slider {...sliderSettings}>
                                    {
                                        activeProject?.projectImages.map((item:any, index:any)=>{
                                            return (
                                                <div key={'image' + index}>
                                                    <img 
                                                        src = { item.fields.file.url } 
                                                        alt = { item.fields.title } />
                                                    <p> {item.fields.description && item.fields.description} </p>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                            <button className="modal__cont__close" 
                                onClick={()=>{ handleOpenModal(false) }}> 
                                    <Icon nameId="cross"/>  
                            </button>
                        </div>
                    </div>
                )
            }
        </section>
  )
}

export default SectionProjects