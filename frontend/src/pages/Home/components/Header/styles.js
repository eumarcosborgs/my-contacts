import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 1rem;

  margin-top: 2rem;

  strong {
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    padding: 0.5rem 1rem;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.main}
    }
  }
`;
