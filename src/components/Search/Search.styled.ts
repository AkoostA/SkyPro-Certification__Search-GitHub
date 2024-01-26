import styled from "styled-components";

export const DivContent = styled.div``;

export const DivSearch = styled.div`
  height: 50px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const InputSearch = styled.input`
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

export const ButtonSearch = styled.button`
  background: #597bbe;
  border-radius: 5px;
  height: 100%;
  width: 150px;
  padding: 0px 10px;
  font-size: 20px;
  transition: all 0.5s;

  &:hover {
    background: #235fd4;
  }

  &:disabled {
    background: #b2acac;
  }
`;

export const PSearch = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
