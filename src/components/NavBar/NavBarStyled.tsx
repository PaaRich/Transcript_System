import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    padding: 0.5rem 0;
    margin: 0 auto;
  }
`;
