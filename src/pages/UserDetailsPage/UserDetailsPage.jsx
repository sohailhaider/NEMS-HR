import React from "react";
// import PropTypes from "prop-types";
import { Row, Col, PageHeader } from "antd";
import { redirectBack } from "../../utilities/navigation-helper";
import { fetchUsers } from "../../utilities/services/firebase";
import { useParams } from "react-router";
import { Card, Descriptions } from "antd";
import _ from "lodash";
import moment from "moment";
//import { Test } from './UserDetailsPage.styles';

const UserDetailsPage = (props) => {
  const { user_id } = useParams();
  const [allUsers, setAllUsers] = React.useState([]);
  const [averages, setAverages] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    fetchUsers().then((_allUsers) => {
      setAllUsers(_allUsers);
    });
  }, []);
  React.useEffect(() => {
    const fetchedUser = _.find(allUsers, { data: { userId: user_id } });
    if (fetchedUser && !_.isEqual(currentUser, fetchedUser)) {
      console.log(fetchedUser);
      setCurrentUser(fetchedUser);
    }
    if (fetchedUser) calculateAverages(fetchedUser);
  }, [allUsers]);

  const calculateAverages = (userData) => {
    console.log(userData);
    const total = userData.data.sessionHistory.length;
    if (total > 0) {
      // setAverages({
      //   avrHR: 0,
      //   avgHrEffort: 0,
      //   avrCal: 0,
      //   avrDuration: 0,
      // });
      let sumHR = 0,
        sumHrEffort = 0,
        sumCal = 0,
        sumDuration = 0;
      userData.data.sessionHistory.map((session) => {
        sumHR += session.avgHeartRate;
        sumHrEffort += session.avgHrEffort;
        sumCal += session.totalCalories;
        sumDuration +=
          session.startTime && session.endTime
            ? Number.parseFloat(
                moment
                  .duration(
                    moment
                      .unix(session.endTime.seconds)
                      .diff(moment.unix(session.startTime.seconds))
                  )
                  .asMinutes()
              )
            : session.startTime
            ? Number.parseFloat(
                moment
                  .duration(
                    moment().diff(moment.unix(session.startTime.seconds))
                  )
                  .asMinutes()
              )
            : 0;
      });
      setAverages({
        avrHR: sumHR / total,
        avgHrEffort: sumHrEffort / total,
        avrCal: sumCal / total,
        avrDuration: sumDuration / total,
      });
    } else {
      setAverages({
        avrHR: 0,
        avgHrEffort: 0,
        avrCal: 0,
        avrDuration: 0,
      });
    }
  };
  return (
    <div className="SessionDetailsPageWrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title={
              currentUser ? currentUser.data.userName : "Loading User Details"
            }
            align="middle"
            subTitle="User Details"
            onBack={redirectBack}
          />
        </Col>
      </Row>
      {currentUser && (
        <span>
          <Row style={{ margin: "10px" }}>
            <Col span={12}>
              <Row>
                <Col span={2}></Col>
                <Col span={20}>
                  <Card>
                    <Descriptions column={1}>
                      <Descriptions.Item label="User Name">
                        {currentUser.data.userName}
                      </Descriptions.Item>
                      <Descriptions.Item label="Location">
                        {currentUser.data.latitude},{" "}
                        {currentUser.data.longitude}
                      </Descriptions.Item>
                      <Descriptions.Item label="Total Number of Sessions">
                        {currentUser.data.sessionHistory.length}
                      </Descriptions.Item>
                      <Descriptions.Item label="Platform">
                        {currentUser.data.platform
                          ? currentUser.data.platform
                          : currentUser.data.platoform
                          ? currentUser.data.platoform
                          : "NA"}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
              </Row>
            </Col>
            {averages && (
              <Col span={12}>
                <Row>
                  <Col span={2}></Col>
                  <Col span={20}>
                    <Card>
                      <Descriptions column={1}>
                        <Descriptions.Item label="Average Heart Rate">
                          {averages.avrHR}
                        </Descriptions.Item>
                        <Descriptions.Item label="Average Heart Rate Effort">
                          {averages.avgHrEffort} %
                        </Descriptions.Item>
                        <Descriptions.Item label="Average Total Calories">
                          {averages.avrCal}
                        </Descriptions.Item>
                        <Descriptions.Item label="Average Total Duration">
                          {Number.parseFloat(averages.avrDuration).toFixed(1)} Minutes
                        </Descriptions.Item>
                      </Descriptions>
                    </Card>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </span>
      )}
    </div>
  );
};

UserDetailsPage.propTypes = {
  // bla: PropTypes.string,
};

UserDetailsPage.defaultProps = {
  // bla: 'test',
};

export default UserDetailsPage;
