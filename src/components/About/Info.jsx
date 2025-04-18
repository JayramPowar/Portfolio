import './about.css'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box ">
        <i className='bx bx-laptop about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ projects </span>
        </div>

        <div className="about__box ">
        <i className='bx bx-group about__icon '></i>
            <h3 className="about__title">Community</h3>
            <span className="about__subtitle">ARC | KITCOEK</span>
        </div>
    </div>

    
  )
}

export default Info;
