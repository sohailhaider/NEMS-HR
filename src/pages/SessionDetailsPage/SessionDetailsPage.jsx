import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './SessionDetailsPage.styles';
import { Row, Col, PageHeader, Card, Descriptions } from "antd";
import { redirectBack } from "../../utilities/navigation-helper";
import { useParams } from "react-router";
import _ from "lodash";
import { fetchLiveSession } from "../../utilities/services/firebase";
import moment from "moment";

const SessionDetailsPage = (props) => {
  const { user_id } = useParams();
  const [liveSessions, setLiveSessions] = React.useState([]);
  const [currentSession, setCurrentSession] = React.useState(null);

  //doing this so that this component could be used independently
  React.useEffect(() => {
    fetchLiveSession().then((_liveSessions) => {
      setLiveSessions(_liveSessions);
    });
  }, []);
  React.useEffect(() => {
    const fetchedSession = _.find(liveSessions, { data: { userId: user_id } });
    if (fetchedSession && !_.isEqual(currentSession, fetchedSession)) {
      console.log(fetchedSession);
      setCurrentSession(fetchedSession);
    }
  }, [liveSessions]);

  return (
    <div className="SessionDetailsPageWrapper">
      <Row>
        <Col span={24}>
          <PageHeader
            className="site-page-header"
            title={
              currentSession ? `Session Details of ${currentSession.data.userName }`: "Loading Session Details"
            }
            align="middle"
            subTitle="Session Details"
            onBack={redirectBack}
          />
        </Col>
      </Row>

      {currentSession && (
        <span>
          <Row style={{ margin: "10px" }}>
            <Col span={12}>
              <Row>
                <Col span={2}></Col>
                <Col span={20}>
                  <Card>
                    <Descriptions column={1}>
                      <Descriptions.Item label="User Name">
                        {currentSession.data.userName}
                      </Descriptions.Item>
                      <Descriptions.Item label="Session Start Time">
                        {currentSession.data.startTime
                          ? moment
                              .unix(currentSession.data.startTime.seconds)
                              .format("hh:mm:ss A on Do MMMM YYYY")
                          : "NA"}
                      </Descriptions.Item>
                      <Descriptions.Item label="Session End Time">
                        {currentSession.data.endTime
                          ? moment
                              .unix(currentSession.data.endTime.seconds)
                              .format("hh:mm:ss A on Do MMMM YYYY")
                          : "NA"}
                      </Descriptions.Item>
                      <Descriptions.Item label="Platform">
                        {currentSession.data.platform}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={2}></Col>
                <Col span={20}>
                  <Card>
                    <Descriptions column={1}>
                      <Descriptions.Item label="Average HR">
                        {currentSession.data.avgHeartRate}
                      </Descriptions.Item>
                      <Descriptions.Item label="Average HR Effort">
                        {currentSession.data.avgHrEffort} %
                      </Descriptions.Item>
                      <Descriptions.Item label="Total Calories">
                        {currentSession.data.totalCalories}
                      </Descriptions.Item>
                      <Descriptions.Item label="Duration">
                        {currentSession.data.startTime &&
                        currentSession.data.endTime
                          ? `${Number.parseFloat(
                              moment
                                .duration(
                                  moment
                                    .unix(currentSession.data.endTime.seconds)
                                    .diff(
                                      moment.unix(
                                        currentSession.data.startTime.seconds
                                      )
                                    )
                                )
                                .asMinutes()
                            ).toFixed(1)} Minutes`
                          : currentSession.data.startTime
                          ? `${Number.parseFloat(
                              moment
                                .duration(
                                  moment().diff(
                                    moment.unix(
                                      currentSession.data.startTime.seconds
                                    )
                                  )
                                )
                                .asMinutes()
                            ).toFixed(1)} Minutes`
                          : "NA"}
                      </Descriptions.Item>
                    </Descriptions>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={1}></Col>
            <Col span={20}>charts</Col>
          </Row>
        </span>
      )}
    </div>
  );
};

SessionDetailsPage.propTypes = {
  // bla: PropTypes.string,
};

SessionDetailsPage.defaultProps = {
  // bla: 'test',
};

export default SessionDetailsPage;
