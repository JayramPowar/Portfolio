import './skills.css'
const Aiml = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">AI & ML</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Data Preprocessing</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Pandas</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Scikit Learn</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name">Data Visualization</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                {/* <div className="skills__data">
                <i className='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"></h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Aiml;
