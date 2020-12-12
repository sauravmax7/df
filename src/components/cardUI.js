import React from 'react'

import {Card,CardGroup} from 'react-bootstrap'

function CardUI(props) {
    return (
        <div>
              <React.Fragment>
            <section>
                <hr/>
                <h2>{props.type}</h2>
                <div className="news">
                    {props.data.map(x => {
                        return (
                           
                            <div className="post" key={x.title}> 
                                <img src="../images/b.jpg" alt=""/>
                                <h2>{x.title}</h2>
                                <p>{x.content}</p>
                                <a className="btn btn-primary" role="button" href={x.n_id}>Read More</a>
                            </div>
                            
                        )
                    })}
                </div>
                {/* <div className="news">
                    {props.city.map(x => {
                        return (

                            <div className="post" key={x.s_id}> 
                               
                                <h2>{x.s_name}</h2>
                             
                            </div>
                        )
                    })}
                </div> */}
            </section>
        </React.Fragment>
        {/* <h2>Most Read News</h2>
        {props.data.map(x=>{
            return(
                <React.Fragment>        
  <Card>
    <Card.Img variant="top" src={x.urlToImage} alt="" />
    <Card.Body>
      <Card.Title>{x.title}</Card.Title>
      <Card.Text>{x.description}</Card.Text>
      <a class="btn btn-primary" role="button" href={x.url}>Read More</a>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Posted on {x.publishedAt}</small>
      
    </Card.Footer>
  </Card>
  <hr/>
  </React.Fragment>

            )
        })}
         */}
        </div>
    )
}

export default CardUI
