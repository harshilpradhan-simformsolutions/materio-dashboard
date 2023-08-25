import styled from 'styled-components';

export const LoginPage = styled.div`
  padding: 48px 28px 36px 28px;
  width: 450px;
  border-radius: 6px;
  background-color: var(--color-dark-bg);
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h2 {
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
    }
  }
  .content {
    h3 {
      font-size: 20px;
      line-height: 32px;
      font-weight: 500;
    }
    p {
      color: var(--color-text-secondary);
      font-size: 14px;
    }
  }
  .form-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 42px;
  }
  .text {
    font-size: 16px;
    margin-top: 28px;
    text-align: center;
  }
  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 28px;
  }
  .ant-divider-inner-text {
    font-weight: 400;
  }
`;

export const LoginBase = styled.div`
  height: 100vh;
  img {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 288px;
    z-index: -1;
  }
`;
