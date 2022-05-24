import React, { useState } from "react";
import { socket } from "../../../socket";
import Box from "../../Common/Box";
import Button from "../../Common/Button";
import styled from "styled-components";
import copy from "../../../copy";

const StyledInput = styled.input`
  padding: 4px 8px;
  border-radius: 8px;
  border: 2px solid var(--secondary);
  background-color: white;
  outline-color: var(--main);
`;

export default function TimerForm() {
  const [timer, setTimer] = useState(5000);
  return (
    <Box mb="24px">
      <Box as="h4" m="0">
        {copy.timerForm.header}
      </Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (socket.connected) {
            socket.emit("start", timer);
          }
        }}
      >
        <StyledInput
          value={timer}
          type="number"
          step={100}
          onChange={({ target }) => setTimer(target.value)}
        ></StyledInput>
        <Button ml="24px" disabled={!socket.connected}>
          {copy.submit}
        </Button>
      </form>
    </Box>
  );
}
