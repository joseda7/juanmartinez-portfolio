import { useEffect, useState } from "react"
import useContentful from "./hooks/useContentful"
import SectionHome from "./components/organisms/SectionHome/SectionHome"
import SectionProjects from "./components/organisms/SectionProjects/SectionProjects"
import SectionContact from "./components/organisms/SectionContact/SectionContact"
import SectionAbout from "./components/organisms/SectionAbout/SectionAbout"
import SectionProcess from "./components/organisms/SectionProcess/SectionProcess"
import NavMenu from "./components/molecules/NavMenu/NavMenu"
import Footer from "./components/atoms/Footer/Footer"

function App() {

  const [sections, setSections] = useState<any>([]);
  const { getSections } =  useContentful();

  useEffect(() => {
    getSections().then((response)=> {
      setSections(response);
      console.log(response);
    })
  },[])
  
  return (
    <>
      <div className="home">
        <SectionHome/>
        <NavMenu items = { sections && sections }/>
      </div>
      
      {
        sections?.map((item:any, index:number) => {  
          switch (item.sectionTitle) {
            case "Proyectos": 
              return (
                <SectionProjects 
                  nameId = { item.sectionTitle.toLocaleLowerCase() }
                  projects = { item.sectionBody }
                  key = { index }/>
              )
            case "Proceso":
              return (
                <SectionProcess 
                  nameId = { item.sectionTitle.toLocaleLowerCase() }
                  key = { index }
                />
              )
            case "Acerca":
              return (
                <SectionAbout 
                  nameId = { item.sectionTitle.toLocaleLowerCase() }
                  key = { index }
                />
              )
            case "Conversemos":
              return (
                <SectionContact 
                  nameId = { item.sectionTitle.toLocaleLowerCase() }
                  key = { index }
                />
              )
          }

        })
      }
      <Footer/>
    </>
  )
}

export default App
