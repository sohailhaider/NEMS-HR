import React from "react";
import { Column } from "@ant-design/charts";
// import PropTypes from "prop-types";
//import { Test } from './DashboardUserStatisticsCard.styles';
import { fetchLiveSession } from "../../../utilities/services/firebase";
import _ from "lodash";

const DashboardUserStatisticsCard = (props) => {
  const [data, setData] = React.useState([]);
  const config = {
    data: data,
    isGroup: true,
    xField: "userName",
    yField: "value",
    seriesField: "name",
    dodgePadding: 2,
    label: {
      position: "middle",
      layout: [
        { type: "interval-adjust-position" },
        { type: "interval-hide-overlap" },
        { type: "adjust-color" },
      ],
    },
  };
  // const [liveSessions, setLiveSessions] = React.useState([]);
  const shapeDataForColumnChart = (_liveSessions) => {
    const chartData = [];
    _liveSessions.forEach((liveSession) => {
      chartData.push({
        name: "Efforts %",
        userName: liveSession.data.userName,
        value: liveSession.data.avgHrEffort,
      });
      chartData.push({
        name: "Calories (KCal)",
        userName: liveSession.data.userName,
        value: liveSession.data.totalCalories,
      });
    });
    return chartData;
  };
  React.useEffect(() => {
    fetchLiveSession().then((_liveSessions) => {
      if (_.isEmpty(data)) setData(shapeDataForColumnChart(_liveSessions));
    });
  },[data]);
  return (
    <div className="DashboardUserStatisticsCardWrapper">
      <Column {...config} />
    </div>
  );
};

DashboardUserStatisticsCard.propTypes = {
  // bla: PropTypes.string,
};

DashboardUserStatisticsCard.defaultProps = {
  // bla: 'test',
};

export default DashboardUserStatisticsCard;
