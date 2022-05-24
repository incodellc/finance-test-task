import styled, { keyframes } from "styled-components";
import Box from "../Box";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 6px solid var(--secondary);
  border-right: 6px solid var(--secondary);
  border-bottom: 6px solid var(--secondary);
  border-left: 10px solid var(--main);
  background: transparent;
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

const motion = (props) => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
`;

const RingSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 4px;
  border: 4px solid ${(p) => p.color};
  border-radius: 50%;
  animation: ${(p) => motion(p)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: white transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

function Loader({ type }) {
  switch (type) {
    case "spinner":
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Spinner />
        </Box>
      );
      break;

    default:
      return (
        <Wrapper>
          <RingSpinner></RingSpinner>
        </Wrapper>
      );
      break;
  }
}

export default Loader;
