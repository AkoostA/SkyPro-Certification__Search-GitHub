import styled from "styled-components";

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserCard = styled.div`
  display: flex;
  background-color: #484f58;
  gap: 20px;
  border-radius: 10px;
  padding: 20px;
`;

export const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserText = styled.p`
  font-size: 30px;
`;

export const UserImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 200px;
`;

export const UserButton = styled.button`
  width: 200px;
  height: 30px;
`;
