import { useState } from "react"
import { Project } from "../../../interfaces/interfaces"
import Slider from "react-slick"
import "./SectionProjects.scss"

interface Props {
    nameId: string
    projects?: Array<any>
}

const SectionProjects = ( {nameId, projects}:Props ) => {

    const [openModal, setOpenModal] = useState(false);
    const [activeProject, setActiveProject] = useState<Project>();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    function handleActiveProject ( _item:any ) {
        setActiveProject(_item);
        handleOpenModal(true);
        console.log(_item);
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

            <div className="section__body">
                <ul className="sectionProjects__cont">
                    {
                        projects?.map((item:any, index:number)=>{
                        return (
                            <li className="sectionProjects__item" 
                                key={index} 
                                onClick={()=>{ handleActiveProject(item.fields) }}>

                                <div className="sectionProjects__item__info">
                                    <h3> { item.fields.projectTitle } </h3>
                                    <p> { item.fields.projectYear } </p>
                                </div>
                                <img
                                    src={item.fields.projectThumbnail.fields.file.url} 
                                    alt={item.fields.projectThumbnail.fields.description} />
                                <div className="sectionProjects__item__filter"></div> 
                            </li>
                        )})
                    }
                </ul>
            </div>

            {
                openModal && (
                    <div className="modal">
                        <div className="modal__cont">
                            <div>
                                <h3> { activeProject?.projectTitle } </h3>
                                <p> 
                                    Cliente: { activeProject?.projectCustomer } |
                                    Año: { activeProject?.projectYear } 
                                </p>
                                <p>
                                    Rol: { activeProject?.projectRole } 
                                </p>
                                <p>
                                    Técnicas: { activeProject?.projectTechniques }
                                </p>
                                <p>
                                    { activeProject?.projectDescription }
                                </p>
                            </div>
                            <div>
                                <Slider {...sliderSettings}>
                                    {
                                        activeProject?.projectImages.map((item:any, index:any)=>{
                                            return (
                                                <div key={'image' + index}>
                                                    <img
                                                        style = {{ width:'100%' }}  
                                                        src = { item.fields.file.url } 
                                                        alt = { item.fields.title } />
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                            <button className="modal__cont__close" 
                                onClick={()=>{ handleOpenModal(false) }}> 
                                    X 
                            </button>
                        </div>
                    </div>
                )
            }

            <div className="separator"></div>
        </section>
  )
}

export default SectionProjects