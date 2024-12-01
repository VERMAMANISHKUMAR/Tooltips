import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-bottom: 180px;
  border-radius: 5px;
  width: 200px;
  font-size: 1.25rem;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TooltipSelector = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select name="tooltipSelector" onChange={handleChange}>
   
      <option value="top">Top</option>
      <option value="bottom">Bottom</option>
      <option value="left">Left</option>
      <option value="right">Right</option>
    </Select>
  );
};

export default TooltipSelector;
