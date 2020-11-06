import React from 'react';

import Chart from 'react-apexcharts';

const GraphicComponent = ({optionsMixedChart, seriesMixedChart}) => {
  return (
    <Chart options={optionsMixedChart} series={seriesMixedChart} type="line" width={600} height={320} />
  );
};

export default GraphicComponent;
