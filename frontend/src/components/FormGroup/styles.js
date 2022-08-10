import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 0.75rem;
  }
`;
