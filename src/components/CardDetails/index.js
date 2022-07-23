import './index.css';

const CardDetails = (props) => {
    const {cardDetails } = props
    const {name,gender,birth_year,mass,eye_color,hair_color,skin_color} = cardDetails

    return(
      <div className='cardContainer'>
        <div>
            <p className='disceiption'>Description</p>
            <p className='paragraph'>Providing service of domestic flight booking @ lowest price guaranteed and also for railway e ticket booking. also offering international flights. giving services to our customers since 1995. now going to start hajj and umarah very soon for our valuble customers it will be also @ very offerable prices.</p>
        </div>
      <div className='flex'>
      <div style={{width: "50%"}}>
        <div className='nameH'>
            <p className='heading'>Name</p>
            <p className='content'>{name}</p>
        </div>
        <div className='detail'>
            <p className='heading'>Gender</p>
            <p className='content'>{gender}</p>
        </div>
        <div className='detail'>
            <p className='heading'>Mass</p>
            <p className='content'>{mass}</p>
        </div>
        <div className='detail'>
            <p className='heading'>Birth Year</p>
            <p className='content'>{birth_year}</p>
        </div>
      </div>
      <div style={{width: "50%"}}>
        <div className='detail'>
            <p className='heading'>Eye Color</p>
            <p className='content'>{eye_color}</p>
        </div>
        <div className='detail'>
            <p className='heading'>Hair Color</p>
            <p className='content'>{hair_color}</p>
        </div>
        <div className='detail'>
            <p className='heading'>skinColor</p>
            <p className='content'>{skin_color}</p>
        </div>
      </div>
     </div>
    </div>
   )
}

export default CardDetails
