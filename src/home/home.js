import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import "../style/home.less";
// import FloatingLabel from './floatingLabel.js';
import { connect } from 'react-redux';
import { fetchJobs } from "../action/getJobsAction";
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor () {
        super();
        // this.responseCallBack = this.responseCallBack.bind(this);
        this.state = {
            results: []
        };
    }
    componentDidMount () {
        debugger;
        this.props.fetchJobs().then((x) => {
            this.setState({
                results: x.payload
            });
        });
    }
    render () {
        return (

            <Container>
                <Row>
                    <Col xs={6} md={4} style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <Card body>
                            <h4>
                                Latest Govt Jobs
                            </h4>
                            < ul style={{ backgroundColor: "transparent" }}>
                                {this.state.results && this.state.results.length > 0 ? this.state.results.map((product, i) =>
                                    (<li className="list" key={i}>
                                        <Link to={`displayCard/${product.Job_Id}`} > {product.PostName} </Link>
                                    </li>)
                                ) : null}
                            </ul >
                        </Card>
                    </Col>
                    <Col xs={6} md={4} style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <Card body>
                            <h4>
                                Latest Private Jobs
                            </h4>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <Card body>
                            <h4>
                                Upcomming Exams News
                            </h4>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state
});

export default connect(mapStateToProps, { fetchJobs })(Home);
