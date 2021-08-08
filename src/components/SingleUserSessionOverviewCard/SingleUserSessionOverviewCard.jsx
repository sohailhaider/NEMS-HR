import React from "react";
// import PropTypes from "prop-types";
import { Card, Descriptions } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
//import { Test } from './SingleUserSessionOverviewCard.styles';

const SingleUserSessionOverviewCard = (props) => (
  <Card>
    {console.log(props)}
    <Descriptions column={3}>
      <Descriptions.Item label="Session Date">
        {moment.unix(props.startTime).format("Do MMMM")}
      </Descriptions.Item>
      <Descriptions.Item label="Duration">
        {props.startTime && props.endTime
          ? `${Number.parseFloat(
              moment
                .duration(
                  moment
                    .unix(props.endTime.seconds)
                    .diff(moment.unix(props.startTime.seconds))
                )
                .asMinutes()
            ).toFixed(1)} Minutes`
          : props.startTime
          ? `${Number.parseFloat(
              moment
                .duration(moment().diff(moment.unix(props.startTime.seconds)))
                .asMinutes()
            ).toFixed(1)} Minutes`
          : "NA"}
      </Descriptions.Item>
      <Descriptions.Item style={{ float: "right" }}>
        <Link to={`/session/${props.userId}?v=${props.index}`}>DETAILS</Link>
      </Descriptions.Item>
    </Descriptions>
  </Card>
);

SingleUserSessionOverviewCard.propTypes = {
  // bla: PropTypes.string,
};

SingleUserSessionOverviewCard.defaultProps = {
  // bla: 'test',
};

export default SingleUserSessionOverviewCard;
