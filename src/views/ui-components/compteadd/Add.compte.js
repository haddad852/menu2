import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import * as Yup from 'yup';
import { Icon } from '@iconify/react';

const Ajoutcompte = () => {

    return (
        <div style="background-color: #eef5f9;">
        <br/>
        <br/>
        <br/>
        <Row>
            <Col>
            <h2 style="color: #08376b; margin-left: 700px;">
            &nbsp; Complete your profile
                </h2> 
                 <img src="./favicon.png" width="300px" height="300px"/>
            </Col>
            <Col>
            <p style="color: #08376b; margin-left: 500px; margin-top: -150px;">
                        
                        <b>
                            &nbsp; &nbsp; &nbsp;
                            YOU HAVE TO ENTER THESE INFORMATION

                        </b>
                           
                        </p>
                        
                        <br/>
                        <br/>
                        <label htmlFor="idCarte" style="color: #08376b; margin-left: 700px;">ID of your cart</label>
                    &nbsp; &nbsp; &nbsp;&nbsp; 
                    <input type="text" required style="color: #08376b; margin-left: 700px;" ></input>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                    <br/>
                    <br/>
                    
                    <label htmlFor="validite" style="color: #08376b; margin-left: 700px;">Validity of your cart</label>
                    &nbsp; &nbsp; &nbsp;
                    <br/>
                    <input type="date" required style="color: #08376b; margin-left: 700px;" ></input>
                    <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    <button className="btn-link srh-btn" style="margin-left: 900px; color: #08376b; border-radius: 50px;" >
                        CHECK

                    </button>
                  
     
        <br/>
    
        <br/>
            </Col>
        </Row>
          

                 
                   
                       
                    
     
        </div >
    );
};

export default Ajoutcompte;