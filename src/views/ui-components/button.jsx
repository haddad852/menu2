import React, { useState } from 'react';
//import { colors } from 'react-select/dist/declarations/src/theme';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col,
    Input,
    input,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Form,
    DropdownItem
} from 'reactstrap';

import favicon from './Act1/favicon.png';
import { Icon } from '@iconify/react';
import Dashboard from './Dashboard/Dashbord'
import Cards1Examples1 from './Dashboard/Cards/Cards1/Cards1Examples1';
import Cards4Examples23 from './Dashboard/Cards/Cards4/Cards4Examples23';
import Cards2Examples8 from './Dashboard/Cards/Cards2/Cards2Examples8';
import Cards5Examples29 from './Dashboard/Cards/Cards5/Cards5Examples29';
import Cards7Examples48 from './Dashboard/Cards/Cards7/Cards7Examples48';
import Cards8Examples55 from './Dashboard/Cards/Cards8/Cards8Examples55';
import Cards9Examples56 from './Dashboard/Cards/Cards9/Cards9Examples56';
import Cards9Examples61 from './Dashboard/Cards/Cards9/Cards9Examples61';
import Cards11Examples70 from './Dashboard/Cards/Cards11/Cards11Examples70';
import Cards12Examples79 from './Dashboard/Cards/Cards12/Cards12Examples79';


const Buttons = () => {

    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onRadioBtnClick = (rSelected) => {
        setRSelected(rSelected);
    }

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);

    }
    const toggleMenu = () => {
        document.getElementById('search').classList.toggle();



    }


    return (
        <div>
            <Row>
                <Col className="app-search" id="search" >
                    <Icon icon="ant-design:search-outlined" />
                    &nbsp;&nbsp;&nbsp; <input type="text" placeholder="Search & Enter" minlength="4" maxlength="8" />
                    <section className="one-fourth" id="html">
                        <img src={favicon} />
                    </section>

                </Col>
                <Col>

                    <Card>


                        <CardBody>
                            <br />
                            <pre>
                                <h2>
                                    &nbsp; WELCOME
                                </h2>
                            </pre>

                            <p>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                You have to verify your account to start investing
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <br />
                                <br />
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <a href='./badge.jsx'>
                                    <button className="btn-link srh-btn" onClick={toggleMenu.bind(null)}>
                                        VERIFY <Icon icon="uil:comment-alt-verify" />
                                    </button>
                                </a>

                            </p>
                             <Cards4Examples23 />
                               <Cards12Examples79 />

                        </CardBody>
                    </Card>
                </Col>



            </Row>
            <Card>

                <CardBody>
                    <Cards2Examples8 />
                    <Cards4Examples23 />
                    <Cards9Examples56 />
                </CardBody>
            </Card>
        </div>
    );
}

export default Buttons;



