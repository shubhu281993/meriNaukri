import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from "../action/getJobsAction";

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
            return (
                <div>
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
                        <div style={{ display: "flex", textAlign: "center" }}>
                            <div style={{ width: "50%", display: "inline-block" }}>
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
                            </div>
                            <div style={{ width: "50%", display: "inline-block" }}>
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
                            </div>

                        </div>
                        <div style={{ marginLeft: "50px", textAlign: "left" }}>
                            <p>
                                {'Job Description : ' + desc}<br />
                                {'Grade Pay : ' + pay}<br />
                                {'Total Vacancy : ' + vacancy}<br />
                                {'Vacancy Details : ' + categoryVacancy}<br />
                                {'Age group : ' + ageGrp}<br />{'Total Post : ' + vacancy}<br />{'Eligibility : ' + eligibility}<br />
                            </p>
                        </div>
                        <div>
                            <h2 style={{ textAlign: "center" }}>Important Links</h2>
                            <br />
                            <div style={{
                                display: "flex", textAlign: "center"
                            }}>
                                < div style={{ width: "50%", display: "inline-block" }}>
                                    <h3>Apply Online </h3>
                                    <h3>Download Notification </h3>
                                    <h3>Website Link </h3>
                                </div>
                                <div style={{ width: "50%", display: "inline-block" }}>
                                    <a href={applyOnlineLink} target="_blank" style={{ fontSize: "xx-large" }}>Click Here</a><br />
                                    <a href={notificationLink} target="_blank" style={{
                                        fontSize: "xx-large"
                                    }}>Click Here</a><br />
                                    < a href={websiteLink} target="_blank" style={{ fontSize: "xx-large" }}>Click Here</a>
                                </div>
                            </div>
                        </div >
                    </div >
                    <hr />
                    <div className="footer" />
                </div >
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
