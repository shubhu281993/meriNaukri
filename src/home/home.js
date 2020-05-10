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
        // if (this.props.jobs.jobs.length > 0) {
        //     const { jobs } = this.props.jobs.jobs.jobs;
        //     this.setState({
        //         result: jobs
        //     });
        // } else {
        this.props.fetchJobs().then((x) => {
            this.setState({
                results: x.payload
            });
        });
    }
    componentWillReceiveProps (nextProps) {
        debugger;
        if (nextProps.jobs.pending === true) {
            this.setState({
                results: nextProps.jobs.jobs
            });
        }
    }
    render () {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={4} style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <Card body>
                            <h4 style={{ backgroundColor: "aliceblue", textAlign: "center", height: "50px", paddingTop: "10px" }}>
                                Latest Govt Jobs
                            </h4>
                            <div >
                                < ul id="jobDetails">
                                    {this.state.results && this.state.results.length > 0 ? this.state.results.map((product, i) =>
                                        (<li className="x" key={i}>
                                            <Link to={`displayCard/${product.Job_Id}`} > {product.PostName} </Link>
                                        </li>)
                                    ) : null}
                                </ul >
                            </div>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} style={{ maxHeight: "600px", overflowY: "auto" }}>
                        <Card body>
                            <h4 style={{ backgroundColor: "aliceblue", textAlign: "center", height: "50px", paddingTop: "10px" }}>
                                Latest Private Jobs
                            </h4>
                            < ul id="jobDetails">
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
                            <h4 style={{ backgroundColor: "aliceblue", textAlign: "center", height: "50px", paddingTop: "10px" }}>
                                Upcomming Exams News
                            </h4>
                            < ul id="jobDetails">
                                {this.state.results && this.state.results.length > 0 ? this.state.results.map((product, i) =>
                                    (<li className="list" key={i}>
                                        <Link to={`displayCard/${product.Job_Id}`} > {product.PostName} </Link>
                                    </li>)
                                ) : null}
                            </ul >
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs
});

export default connect(mapStateToProps, { fetchJobs })(Home);
