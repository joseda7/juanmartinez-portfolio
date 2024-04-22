import './SectionAbout.scss'

interface Props {
  nameId: string
  body: Array<any>
}

const SectionAbout = ({nameId, body}:Props) => {

  const aboutBody = body ? body[0]?.fields : null ;

  return (
    <>
      <section id={nameId} className="section sectionAbout">
          <h2 className='--show-on-tablet'>
            {nameId}
          </h2>
          <div className='sectionAbout__body'>
            <div className='sectionAbout__cont'>
              <p>
                { aboutBody?.biography }
              </p>
              <div className='separator-sm'></div>
              <br />
              <p> 
                <b>
                  { aboutBody?.biographyHighlight }
                </b>
              </p>
            </div>
            <div className='sectionAbout__img'>
              <img 
                src={ aboutBody?.profilePhoto.fields.file.url } 
                alt={ aboutBody?.profilePhoto.fields.title } />
            </div>      
          </div>
      </section>

      <section className="section sectionCustomers">
        <div className='sectionCustomers__body'>
          <h3> Clientes </h3> <br />
          <p> { aboutBody?.customersIntroText } </p>
          <ul className='sectionCustomers__list'>
            {
              aboutBody?.customersList.map((item:any, index:any)=>{
                return(
                  <li key={'Costumer'+index}>
                    <img src={item.fields.file.url} alt={item.fields.title} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default SectionAbout