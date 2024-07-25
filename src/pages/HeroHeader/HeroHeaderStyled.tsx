import styled from "styled-components";

export const Container = styled.section`
  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
`;
