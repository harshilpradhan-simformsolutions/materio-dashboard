import { Button, Space } from 'antd';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Tag } from './ui';

const SectionBase = styled.section`
  margin: 1rem;
  padding: 1rem;
`;

const Display = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <SectionBase>
      <h2>{title}</h2>
      <Space size={10}>{children}</Space>
    </SectionBase>
  );
};

function App() {
  return (
    <>
      <Display title="Button">
        <Button type="primary" size="small">
          Click
        </Button>
        <Button type="primary">Click</Button>
        <Button type="primary" size="large">
          Click
        </Button>
        <Button size="large" shape="round">
          Click
        </Button>
      </Display>
      <Display title="Tags">
        <Tag color="info" bordered={false}>
          Harshil
        </Tag>
      </Display>
    </>
  );
}

export default App;
