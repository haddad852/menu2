import { Field } from 'formik';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, } from 'reactstrap';
import { Container, Col, Row, CardBody } from 'reactstrap';
import { Table } from 'reactstrap';
import TableAction from "./tableaction"
import TableActions from './Tableactions'
import Portfolio from './portfolio/Portfolio'
export default class LayoutComponent extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                {/* --------------------------------------------------------------------------------*/}
                {/* Start Inner Div*/}
                {/* --------------------------------------------------------------------------------*/}
                {/* --------------------------------------------------------------------------------*/}
                {/* Row*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-wallet"> </i>
                        PORTFOLIO
                    </CardTitle>
                    <CardBody className="">

                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        view personal historique
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        View Actions
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        Mange Portfolio
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Tab 1 Contents</h4>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Larry</td>
                                                        <td>the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Specifique action</CardTitle>
                                                <CardText>With supporting  content.</CardText>
                                                <Button>check</Button>
                                                <TableAction />
                                            </Card>
                                        </Col>
                                        <Col sm="6">
                                            <Card body>
                                                <CardTitle>Specifique action</CardTitle>
                                                <CardText>With supporting  content.</CardText>
                                                <Button>check</Button>
                                                <TableActions />
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            <TabPane tabId="3">
                                    <Row>
                                        <Col sm="12">
                                            <Card body>
                                                <CardTitle>Specifique action</CardTitle>
                                                <CardText>With supporting  content.</CardText>
                                                <Button>check</Button>
                                                <Portfolio />
                                            </Card>
                                        </Col>
                                   
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </CardBody>
                </Card>
                {/* --------------------------------------------------------------------------------*/}
                {/* Row*/}
                {/* --------------------------------------------------------------------------------*/}

                {/* --------------------------------------------------------------------------------*/}
                {/* End Inner Div*/}
                {/* --------------------------------------------------------------------------------*/}


            </div>
        );
    }
}


