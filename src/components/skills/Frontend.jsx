import './skills.css'
const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Advance</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">React.js</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Tailwind</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
