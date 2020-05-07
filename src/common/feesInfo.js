import React from 'react';
import { Row, Col } from 'react-bootstrap';

class FeesInfo extends React.Component {
    render () {
        const { fees, appStartDate, appEndDate, feeLastDate, examDate, admitCardDate } = this.props;
        return (
            <div>
                <Row>
                    <Col xs={6} md={6}>
                        <div>
                            <h3>Application Fees</h3>
                        </div>
                        <div>
                            {fees.map(a => {
                                return (<p>
                                    {a}
                                </p>);
                            })}

                        </div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div>
                            <h3>Important Dates</h3>
                        </div>
                        <div>
                            <p>
                                {'Application Start Date : ' + appStartDate}<br />
                                {'Last Date of Applying Online : ' + appEndDate}<br />
                                {'Pay Exam Fee Last Date : ' + feeLastDate}<br />
                                {'Exam Date : ' + examDate}<br />
                                {'Admit Card Available : ' + admitCardDate}<br />
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default FeesInfo;
