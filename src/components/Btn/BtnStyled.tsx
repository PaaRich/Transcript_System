import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  background: linear-gradient(to right, #022546ec, #03458393);
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background: linear-gradient(to right, #022546d0, #034583ad);
    color: rgba(94, 210, 226, 1);
  }
  & div:nth-child(2) {
    background-color: rgba(94, 210, 226, 1);
  }
`;
export const BigButton = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background: linear-gradient(to right, #022546ec, #034583ab);
  color: white;
  border-radius: 40px;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    transform: scaleX(1.05);
    color: rgba(94, 210, 226, 1);
  }
  & div:nth-child(2) {
    background-color: rgba(94, 210, 226, 1);
  }
`;
