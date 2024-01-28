import styled from "styled-components";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  justify-content: center;
  justify-items: center;
  margin-top: 20px;
  row-gap: 20px;
`;

export const CardsUser = styled.div`
  background-color: #484f58;
  width: 230px;
  height: 280px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const UserTitle = styled.h3`
  margin-top: 10px;
`;

export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 200px;
`;

export const UserButton = styled.button`
  width: 180px;
  height: 30px;
  margin-bottom: 10px;
  font-size: 14px;
`;
