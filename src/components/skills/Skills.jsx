import './skills.css'
import './Frontend.jsx'
import Frontend from './Frontend.jsx';
import Backend from './Backend.jsx';
import Aiml from './Aiml.jsx';


const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Tech Lvl</span>

    <div className="skills__container container grid">
    <Frontend/>

    <Backend/>
    <Aiml/>
    </div>
    </section>
  )
}

export default Skills;
