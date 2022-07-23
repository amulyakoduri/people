import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from '../Card';
import CardDetails from '../CardDetails';
import Pagination from '../Pagination';
import './index.css';


const AllCards = () => {
    const [data, setData] = useState([]);
    const [perpage, setPerpage] = useState([]);
    const [detailsinfo, setDetails] = useState([]);
    const [pageNum, setPageNumber] = useState(1);
    const [color,   setColor] = useState([]);
    const [nxt,setNxt] = useState([]);
    const [pre,setPrev] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then(
            res =>{setData(res.data.results);setPerpage(res.data.results.slice(0,3));}
        )
    },[])
    

    const pageHandler = (pageNumber) => {
        setPerpage(data.slice((pageNumber*3)-3,pageNumber*3))
        setPageNumber(pageNumber)
        setColor("red")
    }

    const details = (name) => {
        setDetails(name)
    }

    const prev = () => {
        setPageNumber(pageNum-1,0)
        setPerpage(data.slice(((pageNum-1)*3)-3,(pageNum-1)*3))
    }

    const nx = () => {
        setPageNumber(pageNum+1)
        setPerpage(data.slice(((pageNum+1)*3)-3,(pageNum+1)*3))
       
    }


    return (
        <div className='allDetails'>
         {data.length > 1 ?
          <div >
           {perpage.map(each => {
               let isName =  detailsinfo === each.name
            return(
            <div className='all'> 
              <Card 
                key={each.id}
                cardDetails={each}
                details={details}
              />
              <div>
                {isName && (
                 <CardDetails
                   key={each.id}
                   cardDetails={each}
                 />
                )}
              </div>
            </div>
           )
          })}
         </div> : <p>dta not</p>}
         <div className='page'>
           <div onClick={prev} data={data} pageHandler={pageHandler} className="left">{"<"}</div>
           <Pagination data={data} pageHandler={pageHandler} pageNum={pageNum}/>
           <div onClick={nx} data={data} pageHandler={pageHandler} className="right">{">"}</div>
        </div>  
    </div>
    )
}

export default AllCards








































































































































































































































/* class AllCards extends Component {
    state = { isLoading: true, personData: [], isShow: false, userId:1,name:'' }

    

    componentDidMount() {
      this.getBlogsData()
    }
  
    getBlogsData = async () => {
      const response = await fetch('https://swapi.dev/api/people')
      const data = await response.json()
      const formattedData = Object.values(data.results).map(eachItem => ({
         name: eachItem.name,
         birthYear: eachItem.birth_year,
         gender: eachItem.gender,
         mass: eachItem.mass,
         eyeColor: eachItem.eye_color,
         hairColor:eachItem.hair_color,
         skinColor:eachItem.skin_color,
       }))
    this.setState({ personData: formattedData, isLoading: false }) 
    }

    details = id => {
        this.setState({name:id})
    }

    render() {
        const {personData,name} = this.state
        
      return (
        <div className='allDetails'>
            {personData.map(each => {
                let isName = name === each.name 
    
                console.log(isName, "this is name")
              return(
                <div className='all'>
                   <Card 
                     key={each.id}
                      cardDetails={each}
                      details={this.details}
                    />
                    <div>
                        {isName &&(
                            <CardDetails
                              key={each.id}
                              cardDetails={each}
                            />
                        )}
                    </div>
                    
                </div>
              )
            })}
            <div className='pagination'>
            <div style={{ display: 'block', padding: 30 , textAlign: 'center'}}>
            <Pagination count={4} shape="rounded" color="secondary" />
            </div>
            </div>
        </div>
      )
    }
  } */