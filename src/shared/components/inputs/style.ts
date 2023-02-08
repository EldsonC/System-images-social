import styled from "styled-components";

export const Style = styled.input`
  padding-left: 15px;
  margin-bottom: 21px;

  height: 45px;

  border-radius: 5px;
  border: 1px solid #595959;
  outline: none;

  color: white;
  background: #1a1b2087;
`;

export const PasswordFieldStyle = styled.div `
  padding: 0px 15px; 
  margin-bottom: 21px;

  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  border: 1px solid #595959;
  outline: none;

  color: white;
  background: #1a1b2087;

  input {
    width: 90%;
    height: 100%;

    border: none;
    outline: none;
    background: transparent;
    color: white;

  }
`;
