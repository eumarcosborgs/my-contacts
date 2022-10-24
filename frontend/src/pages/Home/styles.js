import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
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

export const ListHeader = styled.header`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;

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

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)'
    : 'rotate(0deg)')};
    transition: transform 0.2s ease-in;
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

export const ErrorContainer = styled.div`
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

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  p {
    margin-top: 0.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 1rem;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-left: 1.5rem;
    word-break: break-word;
  }
`;
