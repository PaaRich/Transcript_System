import styled from "styled-components";

export const Container = styled.nav`
  position: sticky;
  background-color: white;
  box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 8px 20px -3px rgba(0, 0, 0, 0.5);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    padding: 0.5rem 0;
    margin: 0 auto;
  }
`;
