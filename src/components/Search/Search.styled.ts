import styled from "styled-components";

export const Content = styled.div``;

export const SearchUser = styled.div`
  height: 50px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #282c34;
  }
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 150px;
  padding: 0px 10px;
`;

export const SearchText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
