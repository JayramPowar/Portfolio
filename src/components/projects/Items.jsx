import './projects.css'
const Items = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <a href="https://github.com/JayramPowar" target='_blank' className="project__button">
                Demo <i className='bx bx-right-arrow-alt project__button-icon'></i>
            </a>
        </div>
    );
}

export default Items;