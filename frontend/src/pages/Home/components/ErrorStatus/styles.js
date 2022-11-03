import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  .details {
    margin-left: 1.5rem;

    strong {
      margin-bottom: 0.5rem;

      font-size: 1.375rem;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
    }
  }
`;
