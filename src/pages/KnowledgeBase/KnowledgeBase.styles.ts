import styled from 'styled-components';
import heroBg from '../../assets/images/hero-bg.png';

export const KnowledgeBaseRoot = styled.div`
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  .hero {
    height: 320px;
    margin-bottom: 24px;
    background-image: url(${heroBg});
    background-size: contain;
    &-content {
      height: 100%;
      width: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      h1 {
        color: var(--color-primary);
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
      }
      p {
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
        margin-bottom: 26px;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    .ant-card {
      & .ant-card-meta-title {
        font-weight: 500;
        text-align: center;
        font-size: 20px;
      }
    }
  }
`;
