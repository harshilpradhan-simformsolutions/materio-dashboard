import styled from 'styled-components';

export const PricingBase = styled.div`
  background-color: var(--color-dark-bg);
  border-radius: 6px;
  .pricing {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    &-header {
      font-size: 32px;
      font-weight: 400;
      line-height: 42px;
      color: var(--color-text);
    }
    &-card {
      padding-top: 60px;
      position: relative;
      color: var(--color-text-secondary);
      border: 1px solid var(--color-divider);
      &__popular {
        position: absolute;
        right: 16px;
        top: 16px;
      }
      &__plan {
        color: var(--color-text);
        font-size: 24px;
        line-height: 32px;
        font-weight: 400;
      }
      &__image {
        height: 120px;
      }
      & .label {
        &:not(:last-child) {
          margin-bottom: 16px;
        }
      }
      &-plan {
        & .duration {
          color: #3a3541ad;
        }
        &__amount {
          font-size: 48px;
          line-height: 52px;
          font-weight: 500;
          position: relative;
          & .currency {
            position: absolute;
            top: 5px;
            left: -8px;
            font-size: 14px;
            line-height: 20px;
            color: var(--color-text-secondary);
          }
        }
      }
    }
  }
  .trial {
    margin-top: 60px;
    position: relative;
    color: var(--color-text-secondary);
    padding: 50px 140px;
    background-color: rgb(52, 47, 80);
    img {
      position: absolute;
      height: 277px;
      right: 140px;
      bottom: 0;
    }
  }
  .faq {
    padding: 80px 140px;
    &-head {
      text-align: center;
      p {
        color: var(--color-text-secondary);
      }
    }
  }
`;
