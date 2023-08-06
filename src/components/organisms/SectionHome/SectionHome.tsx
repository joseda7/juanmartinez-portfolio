import logoSrc from "./../../../assets/logotype-juanmartinez.svg"
import birdSrc from "./../../../assets/aulacorhynchus-prasinus.png"
import plantsSrc from "./../../../assets/momordica-charantia.png"
import "./SectionHome.scss"

const SectionHome = () => {
  return (
    <section id="home" className="section sectionhome">
        <h1 className="sectionhome_head">
          <div>
            <img src={logoSrc} alt="Juan Martínez Logotype" />
            <span> ilustración - infografía </span>
          </div>
          <img className="sectionhome_bird" src={birdSrc} alt="Bird Aulacorhynchus Prasinus" />
        </h1> 
        <img className="sectionhome_plants" src={plantsSrc} alt="Plants Momordica Charantia" />
    </section>
  )
}

export default SectionHome