import React, { useEffect,useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {fetchAllCategories} from '../../../actions/fetch_all_categories'
import { Row, Col, Button,Form } from "react-bootstrap";
import DataService from '../../../services/service' 
import ReportNews from "../ReportNews";
import "./full_page.css";
import Share from "./Share";
function FullPage(props) {
    const [newsById, setNewsById] = useState({});
    const [myNews,setMyNews]=useState(props.match.params.news_id);
    const [reportCategory, setreportCategory] = useState([]);
    const [filteredreportCategory, setFilteredreportCategory] = useState();
    const [user, setUser] = useState([])
    const [categoryName,setCategoryName]=useState('');
    const dispatch = useDispatch();
    const getAllCategories = () => dispatch(fetchAllCategories());

    const [category, setcategory] = useState([])
    
 
    
    useEffect(() => {
     
       
        getAllCategories();
        const newId = JSON.stringify({newsid:myNews});
        DataService.getNewsById(newId).then(res => {
            
            setNewsById(res.data[0])
        })
        .catch(err => {
            console.log(err);
        })

        DataService.getAllReportCategory().then(res=>{
           setreportCategory(res.data[0])
        })
        
        DataService.getUserById(myNews).then(res=>{
           
            setUser(res.data[0])
        })

        
        DataService.getAllCategories()
            .then(res => {
            setCategoryName(res.data.find(e=>e.category_id===parseInt(myNews)).category_name)
            
               setcategory(res.data)
            })
       
            .catch(err => {
                console.log(err);
            })
            
        
    }, [])




  const onChangeHandler = (event) => {
    const filtered = reportCategory.filter(
        (reportCategory) => reportCategory.rc_id === parseInt(event.target.value)
    );
    setFilteredreportCategory(filtered[0].rc_id);
};

 
    
    
    return (
        <>
            <div className="outerWrapper">
                <Row>
                    <Col className="com category" xs="auto">
                       {categoryName}
          </Col>
                </Row>
                <Row>
                    <Col className="com title" xs="auto">
                        <h1>{newsById.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="com extract" xs="auto">
                        {newsById.extract}
          </Col>
                </Row>
                <Row>
                    <Col className="com author-date" xs="auto">
                        <span> By {user.f_name} </span>
                        <span>{newsById.postedon}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="com newsImage" xs="auto">
                        <img  className="imgf" src={`../images/${newsById.image}`} alt=""></img>
                        
                    </Col>
                </Row>
                <Row>
                    <Col className="com content" xs="auto">
                       {newsById.content}
          </Col>
                </Row>
                <Row>
                    <Col className="shareAndReport">
                        <br/>
                    <div>
                        
                <Share/>
      
    </div>
    <br/><br/>
    <Form.Group>
			<Form.Label>Select Report Category</Form.Label>
			<select className='form-control' onChange={onChangeHandler} required>
				<option value='' defaultChecked>
					--Select ReportCategory--
				</option>
				{reportCategory.map(({ rc_id, rc_name }) => (
					<option key={rc_id} value={rc_id}>
						{rc_name}
					</option>
				))}
			</select>
		<ReportNews news_id={myNews} reportCat={filteredreportCategory}/>
		</Form.Group>
                    </Col>
                </Row>
            </div>
            <form>
       
      </form>
      
        </>
    );
}

export default FullPage;