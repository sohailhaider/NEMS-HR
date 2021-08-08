import React from "react";
// import PropTypes from "prop-types";
import { Card } from "antd";
import { Line } from "@ant-design/charts";

const HrValuesChart = ({values, title}) => {
  const parseDataForChart = (values) => {
    return values.map((reading, index) => {
      return {
        index: index + 1,
        value: reading,
        category: title,
      };
    });
  };
  var config = {
    data: parseDataForChart(values),
    padding: "auto",
    xField: "index",
    yField: "value",
    seriesField: "category",
  };
  return (
    <Card className="HrValuesChartWrapper">
      <Line {...config} />
    </Card>
  );
};

HrValuesChart.propTypes = {
  // bla: PropTypes.string,
};

HrValuesChart.defaultProps = {
  // bla: 'test',
};

export default HrValuesChart;
