import "./SectionProjects.scss"

interface Props {
    nameId: string
    projects?: Array<any>
}

const SectionProjects = ( {nameId, projects}:Props ) => {
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
                        <li className="sectionProjects__item" key={index}>
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

        <div className="separator"></div>
    </section>
  )
}

export default SectionProjects