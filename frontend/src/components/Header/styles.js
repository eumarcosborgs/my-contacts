import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 4.625rem;
`;

export const InputSearchContainer = styled.div`
  margin-top: 3rem;
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 3.125rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;

    outline: 0;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
