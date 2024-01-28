import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  color: white;
`;

export const FilterTitle = styled.h2``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  background: transparent;
  color: ${(props) => (props.$isActive ? "#235fd4" : "#597bbe")};
  border-bottom: ${(props) => (props.$isActive ? "1px solid #235fd4" : "none")};
`;
