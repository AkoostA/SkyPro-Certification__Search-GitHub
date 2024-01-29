import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonPrevNext = styled.button`
  height: 30px;
  padding: 0 10px;
`;

export const NumberPage = styled.button`
  height: 30px;
  width: 30px;
  cursor: auto;

  &:hover {
    background: #597bbe;
  }
`;
