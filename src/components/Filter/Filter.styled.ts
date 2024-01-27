import styled from "styled-components";

export const FilterContent = styled.div`
  text-align: center;
  color: white;
`;

export const FilterTitle = styled.h2``;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  margin-right: 20px;
  background: transparent;
  color: ${(props) => (props.$isActive ? "#235fd4" : "#597bbe")};
  border-bottom: ${(props) => (props.$isActive ? "1px solid #235fd4" : "none")};
`;
