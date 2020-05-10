import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import '../style/header.less';

class JobDescription extends React.Component {
    render () {
        const { desc, pay, categoryVacancy, ageGrp, vacancy, eligibility } = this.props;
        var vacancies = categoryVacancy ? categoryVacancy.split("|") : undefined;
        console.log(vacancies);
        var categoryvac = vacancies.map((x, i) => {
            debugger;
            var y = [];
            var z = x.split("-");
            y.push(z[0]);
            y.push(z[1]);
            return y;
        });
        console.log(categoryvac);
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <div className="displayForm">
                            <div>
                                Job Description :
                            </div>
                            <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                                {desc}
                            </div>
                        </div>
                        <div className="displayForm">
                            <div>
                                Grade Pay :
                            </div>
                            <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                                {pay}
                            </div>
                        </div>
                        <div className="displayForm">
                            <div>
                                Age group :
                            </div>
                            <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                                {ageGrp}
                            </div>
                        </div>
                        <div className="displayForm">
                            <div style={{ width: "13%" }}>
                                Eligibility :
                            </div>
                            <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                                {eligibility}
                            </div>
                        </div>
                        <div className="displayGrid">
                            <div>
                                Total Vacancy :
                            </div>
                            <div style={{ fontWeight: "bold", marginLeft: "5px" }}>
                                {vacancy}
                            </div>
                        </div>
                        <div>
                            <Table striped bordered hover responsive style={{ width: "100%" }}>
                                <tbody>
                                    <tr>
                                        {categoryvac.map((x, i) => {
                                            return (
                                                < td style={{ fontWeight: "bold" }} > {x[0]}</td>
                                            );
                                        })}
                                    </tr>
                                    <tr>
                                        {categoryvac.map((x, i) => {
                                            return (
                                                < td > {x[1]}</td>
                                            );
                                        })}
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </div >
        );
    }
}
export default JobDescription;

