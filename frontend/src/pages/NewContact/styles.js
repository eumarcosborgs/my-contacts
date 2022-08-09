import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const ListContainer = styled.div`
  margin-top: 1.5rem;

  header {
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;

      margin-bottom: 0.5rem;

      span {
        margin-right: 0.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main}
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 1rem;

  & + & {
    margin-top: 1rem;
  }

  .info {

    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;

        padding: 0.25rem;
        border-radius: 4px;
        margin-left: 0.5rem;
      }
    }

    span {
      display: block;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 0.5rem;
    }
  }
`;
