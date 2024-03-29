import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 3.25rem;

  background: #fff;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  outline: none;
  padding: 0 1rem;

  font-size: 1rem;
  transition: border-color 0.2s ease-in, background-color 0.2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

`;
