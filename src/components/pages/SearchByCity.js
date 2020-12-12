import React from 'react'
import {useState} from "react";
import CardUI from '../cardUI';

export default function SearchByCity(props) {


 const [city, setCity] = useState()
 const [filteredNews, setfilteredNews] = useState()


    const getCity = (e) => {
        console.log(city);
        e.preventDefault();
        if(city === "" || city === "nothing" ){
            console.log("There is no source selected");
        }else{
            console.log("Check news from props"+JSON.stringify(props.news.filter(item => item.c_id === city)));
             setfilteredNews(props.news.filter(item => item.c_id === parseInt(city)));
            console.log("From filtered"+(filteredNews))
        }
    }
    
    let news;
    if(filteredNews !== undefined){
        if(filteredNews.length >0){
      news = <CardUI data={filteredNews}></CardUI>          
        }
    else{
        news = <p>News Will Appear Soon!</p>
    }
}

console.log("Check"+JSON.stringify(props.city.cname));
console.log("scdjcc"+JSON.stringify(filteredNews));
    return (
        <React.Fragment>
        
            <h2>Search By city</h2>
                <hr/>
             <form  onSubmit = {getCity} >
                
                    <label>City</label>
                    <select onChange = {e => setCity(e.target.value)}>
                        <option value="nothing">Select an option...</option>
                        {
                            props.city.map(x => {
                                return(
                                    <option key={x.c_id} value={x.c_id}>{x.c_name}</option>
                                )
                            })
                        }
                    </select>

                    <input type="submit" value="Search" />
                
             </form>   
                    {/* <div>
                    
                    {
                    filteredNews.map(x => {
                            return (
                                <div className="post" key={x.n_id}> 
                                <img src={x.image} alt={x.title} />
                                    <h2>{x.content}</h2>
                                    
                                </div>
                            )
                        }) 
                    }
                    </div> */}
                    {news}
    </React.Fragment>
    )
}
