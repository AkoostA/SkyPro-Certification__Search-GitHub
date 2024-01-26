import styled from "styled-components";

export const DivFilter = styled.div`
  text-align: center;
  color: white;
`;

export const H2Filter = styled.h2``;

export const ButtonFilter = styled.button<{ $isActive: boolean }>`
  margin-right: 20px;
  background: transparent;
  color: ${(props) => (props.$isActive ? "#235fd4" : "#597bbe")};
  border-bottom: ${(props) => (props.$isActive ? "1px solid #235fd4" : "none")};
`;
