import React, { useState } from "react";
import styled from "styled-components";
import Tooltip from "./component/Tooltip";
import TooltipSelector from "./component/TooltipSelector";
import "./styles.css";

const TooltipTarget = styled.span`
  color: #fff;
`;

const App = () => {
  const [position, setPosition] = useState("top");

  const handleChange = (value) => {
    setPosition(value);
  };

  return (
    <div className="App">
     <h1>Tooltip Project</h1>
      <TooltipSelector onChange={handleChange} />
      <Tooltip position={position} message="I am a tooltip!">
        <TooltipTarget>Hover over me!</TooltipTarget>
      </Tooltip>
    </div>
  );
};

export default App;
