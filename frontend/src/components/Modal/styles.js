import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  animation: ${fadeIn} 0.3s forwards;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${fadeOut} 0.2s;
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 28.125rem;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 1.5rem;

  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${scaleOut} 0.2s;
  `}

  > h1 {
    font-size: 1.375rem;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  p {
    margin-top: 0.5rem
  }

  .modal-body {
    margin-top: 2rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  .cancel-button {
    margin-right: 1.5rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
