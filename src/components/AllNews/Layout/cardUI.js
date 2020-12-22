import React from "react";
import DataService from "../../../services/service";
import { Link } from "react-router-dom";

function CardUI(props) {
  function updateCount(id) {
    const newsId = JSON.stringify({ news_id: id });
    DataService.updateCount(newsId).then((res) => {
      let data = res.data;
      console.log("From action" + data);
      return data;
    });
  }

  return (
    <div>
      <React.Fragment>
        <section>
          
          <h2>{props.type}</h2>
  {/* <h2 className="newsTitle">{props.tagName}</h2> */}
          <div className="newsc">
            {props.data.map((x) => {
              return (
                <div className="postc" key={x.news_id}>
                  <img className="imgc" src={`../images/${x.image}`} alt="" />
                  {/* <img className="imgc" src="../images/kohli.jpg" alt=""/> */}
                  <div className="postch2">{x.title}</div>
                  <div className="extractc">{x.extract}</div>
                  <pre>
                    Read {x.readcount} times Posted :{x.postedon.slice(0, 10)}
                  </pre>

                  <Link
                    to={`FullPage/${x.news_id}`}
                    onClick={() => updateCount(x.news_id)}
                    role="button"
                  >
                    Read More
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </React.Fragment>
    </div>
  );
}

export default CardUI;
