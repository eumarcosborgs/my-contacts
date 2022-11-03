import styled from 'styled-components';

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
