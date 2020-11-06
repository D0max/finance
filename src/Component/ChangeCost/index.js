import React from 'react';
import { Select } from "antd";

const ChangeCost = (props) => {
  const handleChange = (event) => {
    props.chengeHandler(event)
  }

  return (
    <Select defaultValue={props.symbol} style={{ width: 120 }} onChange={handleChange}>
      <Select.Option value="RUB">RUBLE</Select.Option>
      <Select.Option value="EUR">EURO</Select.Option>
      <Select.Option value="USD">DOLLAR</Select.Option>
    </Select>
  );
};

export default ChangeCost;
