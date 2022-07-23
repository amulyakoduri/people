import './index.css';

const Card = (props) => {
    const {cardDetails, details} = props
    const {name,gender,birth_year,mass,eye_color,hair_color,skin_color}= cardDetails

    const viewDetails =() =>{
        details(name)
    }

    return(
      <div className="card">
        <div className='nameH'>
        <p className='name'>{name}</p>
        </div>
        <div className='details'>
            <p className='genderH'>Gender</p>
            <p className='gender'>{gender}</p>
        </div>
        <div className='details'>
            <p className='massH'>Mass</p>
            <p className='mass'>{mass}</p>
        </div>
        <div className='details'>
            <p className='birthYearH'>Birth Year</p>
            <p className='gender'>{birth_year}</p>
        </div>
        <div className='details'>
            <p className='eyeColorH'>Eye Color</p>
            <p className='gender'>{eye_color}</p>
        </div>
        <div className='details'>
            <p className='hairColorH'>Hair Color</p>
            <p className='gender'>{hair_color}</p>
        </div>
        <div className='details'>
            <p className='skinColorH'>skinColor</p>
            <p className='gender'>{skin_color}</p>
        </div>
       <button className="button" onClick={viewDetails}>View Details</button>
      </div>
    )
}

export default Card