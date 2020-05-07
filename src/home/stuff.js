import React, { Component } from 'react';
import DisplayCard from '../common/card';
import Loading from '../common/loading';
import { connect } from 'react-redux';
import { fetchJobs } from "../action/getJobsAction";

class Stuff extends Component {
    constructor () {
        super();
        this.state = {
            results: []
        };
    }
    componentDidMount () {
        debugger;
        this.props.fetchJobs().then((x) => {
            this.setState({
                results: x
            });
        });
    }
    render () {
        debugger;
        return (<div style={{ marginBottom: '20px' }}>
            {this.state.results.payload && this.state.results.payload.length > 0 ? this.state.results.payload.map((info) => (< DisplayCard
                id={info.Job_Id} companyname={info.Company_Name}
                postName={info.PostName} advtNo={info.Advt_No}
                ageGrp={info.Age_Grp} desc={info.Job_Description}
                pay={info.Grade_Pay} appStartDate={info.App_StartDate}
                appEndDate={info.App_EndDate} feeLastDate={info.ExamFee_LastDate}
                websiteLink={info.Official_Website_Link} eligibility={info.Eligibility}
                examDate={info.ExamDate} admitCardDate={info.AdmitCard_Date}
                notificationLink={info.Notification_Link} applyOnlineLink={info.Apply_Online_Link}
                vacancy={info.Total_Vacany} categoryVacancy={info.CategoryWise_Vacancy}
                applicationFee={info.ApplicationFee} />)) : <Loading />}
        </div>);
    }
}
const mapStateToProps = state => ({
    jobs: state
});

export default connect(mapStateToProps, { fetchJobs })(Stuff);
