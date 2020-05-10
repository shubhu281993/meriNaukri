import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from "../action/getJobsAction";
import FeesInfo from './feesInfo';
import JobDescription from './jobDescription';
import '../style/header.less';
import { Table } from 'react-bootstrap';

class DisplayCard extends React.Component {
    constructor () {
        debugger;
        super();
        this.state = {
            result: [],
            filteredJob: [],
            jobId: ''
        };
    }
    componentDidMount () {
        debugger;
        if (this.props.jobs.jobs.length > 0) {
            const { jobs } = this.props.jobs.jobs;
            const currentJobId = this.props.match.params.id;
            const result = jobs.filter(obj => {
                return obj.Job_Id === currentJobId;
            });
            this.setState({
                filteredJob: result,
                jobId: currentJobId,
                result: jobs
            });
        } else {
            this.props.fetchJobs().then((x) => {
                const currentJobId = this.props.match.params.id;
                const result = x.payload.filter(obj => {
                    return obj.Job_Id === currentJobId;
                });
                this.setState({
                    results: x.payload,
                    filteredJob: result,
                    jobId: currentJobId
                });
            });
        }
    }
    componentWillReceiveProps (nextProps) {
        debugger;
        if (nextProps.match.params.id !== this.props.match.params.id) {
            const currentJobId = nextProps.match.params.id;
            const result = this.state.result.filter(obj => {
                return obj.Job_Id === currentJobId;
            });
            this.setState({
                filteredJob: result,
                jobId: currentJobId
            });
        }
    }
    render () {
        debugger;
        const fitJob = this.state.filteredJob.length === 0 ? [] : this.state.filteredJob;
        if (fitJob.length > 0) {
            const newJob = fitJob.map(x => {
                return {
                    companyname: x.Company_Name,
                    postName: x.PostName,
                    advtNo: x.Advt_No,
                    ageGrp: x.Age_Grp,
                    desc: x.Job_Description,
                    pay: x.Grade_Pay,
                    appStartDate: x.App_StartDate,
                    appEndDate: x.App_EndDate,
                    feeLastDate: x.ExamFee_LastDate,
                    websiteLink: x.Official_Website_Link,
                    eligibility: x.Eligibility,
                    examDate: x.ExamDate,
                    admitCardDate: x.AdmitCard_Date,
                    notificationLink: x.Notification_Link,
                    applyOnlineLink: x.Apply_Online_Link,
                    vacancy: x.Total_Vacany,
                    categoryVacancy: x.CategoryWise_Vacancy,
                    applicationFee: x.ApplicationFee
                };
            }

            );
            const { companyname, postName, advtNo, ageGrp, desc,
                pay, appStartDate, appEndDate, feeLastDate, websiteLink,
                eligibility, examDate, admitCardDate, notificationLink, applyOnlineLink,
                vacancy, categoryVacancy, applicationFee } = newJob[0];
            var fees = applicationFee ? applicationFee.split("|") : undefined;
            return (<div style={{ display: "flex" }}>
                <div className="cardBody">
                    <div className="heading" style={{ textAlign: "center" }}>
                        {companyname !== undefined && postName !== undefined ?
                            <h3>{companyname + " - " + postName}</h3> : null}
                        {companyname !== undefined ?
                            <h3>{companyname}</h3> : null}
                        {advtNo !== undefined ?
                            <h3>{'Advt NO : ' + advtNo}</h3> : null}
                    </div>
                    <hr />
                    <div className="body">
                        <div style={{ textAlign: "center" }}>
                            <FeesInfo fees={fees} appStartDate={appStartDate} appEndDate={appEndDate} feeLastDate={feeLastDate} examDate={examDate} admitCardDate={admitCardDate} />
                            <div style={{ textAlign: "left" }}>
                                <JobDescription desc={desc} pay={pay} vacancy={vacancy} categoryVacancy={categoryVacancy} ageGrp={ageGrp} eligibility={eligibility} />
                            </div>
                            <div>
                                <h2 style={{ textAlign: "center" }}>Important Links</h2>
                                <br />
                                <Table responsive hover style={{ width: "100%" }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Apply Online
                                            </td>
                                            <td>
                                                <a href={applyOnlineLink} target="_blank" style={{ fontSize: "xx-large" }}>Click Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Download Notification
                                            </td>
                                            <td>
                                                <a href={notificationLink} target="_blank" style={{
                                                    fontSize: "xx-large"
                                                }}>Click Here</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Website Link
                                            </td>
                                            <td>
                                                < a href={websiteLink} target="_blank" style={{ fontSize: "xx-large" }}>Click Here</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div >
                        </div >
                        <hr />
                        <div className="footer" />
                    </div >
                </div>
                <div className="quotes">

                    <div className="quote-container">
                        <i className="pin" />
                        <blockquote className="note yellow">
                            We can't solve problems by using the same kind of thinking we used when we created them.
                            <cite className="author">Albert Einstein</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
            );
        } else {
            return (
                <div />
            );
        }
    }
}

const mapStateToProps = state => ({
    jobs: state
});

export default connect(mapStateToProps, { fetchJobs })(DisplayCard);
