import logoSrc from "./../../../assets/logotype-juanmartinez.svg"
import birdSrc from "./../../../assets/aulacorhynchus-prasinus.webp"
import plantsSrc from "./../../../assets/momordica-charantia.webp"
import "./SectionHome.scss"

const SectionHome = () => {
  return (
    <section id="home" className="section sectionhome">
        <div className="sectionhome_head">
          <div>
            <img src={logoSrc} alt="Juan Martínez Logotype" />
            <span> Ilustración - Infografía </span>
          </div>
          <img className="sectionhome_bird" src={birdSrc} alt="Bird Aulacorhynchus Prasinus" />
        </div> 
        <img className="sectionhome_plants" src={plantsSrc} alt="Plants Momordica Charantia" />
    </section>
  )
}

export default SectionHome