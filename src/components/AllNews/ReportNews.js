import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import DataService from "../../services/service";
import { useHistory } from 'react-router-dom';

const ReportNews = (props) => {

    
    const initialState = {
        email: '',
        comment: '',
    };
    const [reportState, setReportState] = useState(initialState);
    let history = useHistory();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReportState({ ...reportState, [name]: value });
    }
   
    const handleSubmit = (event) => {   
        event.preventDefault();
        let formData = new FormData();
        formData.append('email', reportState.email);
        formData.append('comment', reportState.comment);
        formData.append('reportcategory_id', parseInt(props.reportCat));
        formData.append('newsId', parseInt(props.news_id));

        // console.log(formData.getAll('comment','email','reportcategory_id','newsId'))
     
        DataService.createReport(formData)
				.then((res) => {
                    console.log(res.data)
                    if(res.data===0){
                    setReportState(initialState);
                    history.push('/AllNews');
                }else{
                alert("You have Already Reported!")
                    history.push('/AllNews');
                }
                })
}
    

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={reportState.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea" rows="3"
                        name="comment"
                        value={reportState.comment}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button
                    as="input"
                    type="submit"
                    value="Report news"
                    variant="info"
                    block
                />
            </Form>
        </div>
    )
};

export default ReportNews;
