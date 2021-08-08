import React from "react";
// import PropTypes from "prop-types";
//import { Test } from './Chart.styles';
import { Area } from "@ant-design/charts";

const Chart = (props) => {
  const parseDataForChart = (data) => {
    const chartData = [];
    data.hrEfforts.forEach((reading, index) => {
      chartData.push({
        index: index + 1,
        value: reading,
        category: "HR Efforts",
      });
      if (data.hrValues && data.hrValues[index]) {
        chartData.push({
          index: index + 1,
          value: data.hrValues[index],
          category: "HR Values",
        });
      } else {
        chartData.push({
          index: index + 1,
          value: 0,
          category: "HR Values",
        });
      }
    });
    return chartData;
  };
  var config = {
    data: parseDataForChart(props.data),
    xField: "index",
    yField: "value",
    seriesField: "category",
    legend: { position: "top" },
  };
  return (
    <div className="ChartWrapper">
      <Area {...config} />
    </div>
  );
};

Chart.propTypes = {
  // bla: PropTypes.string,
};

Chart.defaultProps = {
  // bla: 'test',
};

export default Chart;
