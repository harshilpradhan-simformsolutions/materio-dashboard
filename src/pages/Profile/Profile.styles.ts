import styled from 'styled-components';

export const AccountContainer = styled.div`
  .profile-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .profile-image {
    height: 120px;
    width: 120px;
    border-radius: 4px;
  }
  .profile-text {
    font-weight: 400;
  }
  .warning {
    color: var(--color-warning);
    border-radius: 5px;
    display: flex;
    height: 74px;
    gap: 12px;
    padding: 15px 17px;
    background-color: rgb(72, 62, 66);
    &-icon {
      align-self: flex-start;
    }
    &-content {
      margin-right: auto;
      &___title {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
      }
      &__subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
  .ant-select {
    & .ant-select-arrow {
      color: unset;
    }
    & .ant-select-selector {
      height: 100%;
      background-color: transparent;
      border: 1px solid #e7e3fc3b;
      & .ant-select-selection-item {
        line-height: 60px;
      }
    }
  }
`;
